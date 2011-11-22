var thrift = require('thrift'),
    accumulo = require('accumulo');

process.env.PORT = 9999;
var connection = thrift.createConnection("0.0.0.0", process.env.PORT);
var master = thrift.createClient(accumulo.services.master, connection);

//                cloudtrace.tinfo info, security.AuthInfo
// getMasterStats(tinfo, credentials, callback)
var tinfo = new accumulo.ttypes.cloudtrace.TInfo();
var creds = new accumulo.ttypes.security.AuthInfo({'user':'root','password':'secret','instanceId':'cloudbase'});
master.getMasterStats(tinfo, creds, function(args){ console.log(args); });

console.log('done.');


