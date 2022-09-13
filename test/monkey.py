import ctypes
from ctypes import *
from win32con import *
import time
from ctypes.wintypes import HHOOK, DWORD, WPARAM, LPARAM, MSG

CallNextHookEx = ctypes.windll.user32.CallNextHookEx
SetWindowsHookExA = ctypes.windll.user32.SetWindowsHookExA
UnhookWindowsHookEx = ctypes.windll.user32.UnhookWindowsHookEx
GetModuleHandleW = ctypes.windll.kernel32.GetModuleHandleW
hook = None

def hookProc(nCode, wParam, lParam:LPARAM):
    print(nCode)
    print(wParam)
    print(lParam.value)
    return CallNextHookEx(hook, nCode, wParam, lParam)

HOOPROC = ctypes.WINFUNCTYPE(c_int, WPARAM, LPARAM)
hookProcPointer = HOOPROC(hookProc)

hook = SetWindowsHookExA(WH_KEYBOARD,hookProcPointer,None,0)
print("hook id is ", hook)
print(GetLastError())

RUNNING = True
# while RUNNING:
try:
    msg = MSG()
    windll.user32.GetMessageA(byref(msg), 0, 0, 0)
except KeyboardInterrupt as kerror:
    print("ok")
    UnhookWindowsHookEx(hook)  