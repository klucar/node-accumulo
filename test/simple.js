var thrift = require('thrift'),
    accumulo = require('accumulo');

var connection = thrift.createConnection("localhost", "9999");
var master = thrift.createClient(accumulo.services.master, connection);

//                cloudtrace.tinfo info, security.AuthInfo
// getMasterStats(tinfo, credentials, callback)
var tinfo = new accumulo.ttypes.cloudtrace.TInfo();
var creds = new accumulo.ttypes.security.AuthInfo('root','secret','9959f958-fe52-4522-ad24-2a9cbfdf7db8');
master.getMasterStats(tinfo, creds, function(args){ console.log(args) });



 
