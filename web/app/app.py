from bottle import *
from functools import partial

view = partial(jinja2_view)

app = Bottle()