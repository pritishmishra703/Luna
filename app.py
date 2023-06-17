import openai
import json
from flask import Flask, render_template, request
from luna import *

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

with open(f'{BASE_DIR}\config.json') as file:
    config = json.load(file)

events = open(f"{BASE_DIR}\\prompts\\events.txt", 'r').read()

prompt_index = 0

messages = [
    {"role": "user", "content": events},
    {"role": "assistant", "content": "{\n  \"events\": [],\n  \"response\": \"Hello! I'm Luna. How can I assist you today? 😊\"\n}"},
]

chat = [
    {"role": "assistant", "content": "Hello! I'm Luna. How can I assist you today? 😊"}
]

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


@app.route('/')
def index():
    return render_template('index.html', chat=chat)


@app.route('/welcome')
def welcome():
    return render_template('welcome.html')

@app.route('/set_data')
def set_data():
    try:
        api_key = request.args.get('api_key')
        with open(f"{BASE_DIR}\\credentials\\openai_api_key.txt", 'w') as f:
            f.write(api_key)

        return {
            'status': 'success'
        }
    
    except Exception as e:
        return {
            'status': 'error',
            'error': e
        }

@app.route('/generate_chat_response')
def response():
    try:
        # api key
        openai.api_key_path = f"{BASE_DIR}\\credentials\\openai_api_key.txt"

        # get the user input
        inp = request.args.get('input')
        inp = inp.strip()
        # added user input to the messages
        messages.append({"role": "user", "content": inp})
        chat.append({"role": "user", "content": inp})
        # get the response from chatgpt
        out = generate_chat_response(messages)
        # add response to messages
        messages.append({"role": "assistant", "content": out})
        # extract event and response
        response = parse_json(out)

        def perform_event_wrapper(response):
            # perform event
            status = perform_events(response['events'])

            # check for error
            if status['status'] == 'error':
                response = f"There was an Unknown Error. Please try again.\nError: {status['error']}"
                return response
            
            return response
        
        response = perform_event_wrapper(response)
        
        if type(response) is dict:
            response = response['response']
            response = response.replace('\n', '<br>')
    
    except Exception as e:
        print(e)
        response = f'Error: {e}'

    chat.append({"role": "assistant", "content": response})

    # return output dictionary
    output = {
        'response': response
    }
    return json.dumps(output)


if __name__ == '__main__':
    app.run(debug=True, port=8000)
