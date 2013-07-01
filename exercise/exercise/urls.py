from django.conf.urls.defaults import *
from VDB.views import *
urlpatterns = patterns('',
	('^hello/$', hello),
	('^$',main),
	(r'^time/plus/(\d{1,6})/$',time),
	('^test/$',test)
)