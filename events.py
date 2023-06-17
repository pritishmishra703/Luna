import webbrowser
import pyautogui
import subprocess


def open_website(*args):
    for url in args:
        webbrowser.open(url)
    return None


def simulate_key_press(*args):
    pyautogui.hotkey(*args)
    return None


def open_application(command):
    subprocess.Popen(command, shell=True)
    return None
