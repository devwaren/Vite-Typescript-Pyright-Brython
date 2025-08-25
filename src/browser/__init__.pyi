from typing import Protocol, Any, Callable, Union

# Event type
class DOMEvent(Protocol):
    type: str
    target: Any

# Document type
class DOMDocument(Protocol):
    def __getitem__(self, key: str) -> Any: ...
    def bind(self, event: str, func: Callable[[DOMEvent], None]) -> None: ...

# Window type
class Window(Protocol):
    onload: Union[Callable[[], None], None]
    
# Event type

class BUTTON(Protocol):
    def onclick(self, func: Callable[[DOMEvent], None]) -> None: ...

class INPUT(Protocol):
    def oninput(self, func: Callable[[DOMEvent], None]) -> None: ...

# Global objects
window: Window
document: DOMDocument
input: INPUT
