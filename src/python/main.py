from browser import document

counter = 0

def increment() -> None:
    global counter
    counter += 1
    document["btn"].text = f"Counter: {counter}"
    document["btn"].style.color = "black"


document["btn"].bind("click", increment)
