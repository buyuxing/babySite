from bottle import *
from functools import partial

view = partial(jinja2_view)

app = Bottle()
get = app.get
post = app.post
TEMPLATE_PATH.append('./templates/')