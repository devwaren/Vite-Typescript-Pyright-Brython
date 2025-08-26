from browser import document, DOMEvent

counter = 0


def increment(event: DOMEvent) -> None:
    global counter
    counter += 1
    document["btn"].text = f"Counter: {counter}"
    document["btn"].style.color = "black"


document["btn"].bind("click", increment)
