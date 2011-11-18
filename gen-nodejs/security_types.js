//
// Autogenerated by Thrift Compiler (0.7.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var ttypes = module.exports = {};
ttypes.SecurityErrorCode = {
'DEFAULT_SECURITY_ERROR' : 0,
'BAD_CREDENTIALS' : 1,
'PERMISSION_DENIED' : 2,
'USER_DOESNT_EXIST' : 3,
'CONNECTION_ERROR' : 4,
'USER_EXISTS' : 5,
'GRANT_INVALID' : 6,
'BAD_AUTHORIZATIONS' : 7,
'INVALID_INSTANCEID' : 8,
'TABLE_DOESNT_EXIST' : 9
};
var AuthInfo = module.exports.AuthInfo = function(args) {
  this.user = null;
  this.password = null;
  this.instanceId = null;
  if (args) {
    if (args.user !== undefined) {
      this.user = args.user;
    }
    if (args.password !== undefined) {
      this.password = args.password;
    }
    if (args.instanceId !== undefined) {
      this.instanceId = args.instanceId;
    }
  }
};
AuthInfo.prototype = {};
AuthInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.user = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.password = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.instanceId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AuthInfo.prototype.write = function(output) {
  output.writeStructBegin('AuthInfo');
  if (this.user) {
    output.writeFieldBegin('user', Thrift.Type.STRING, 1);
    output.writeString(this.user);
    output.writeFieldEnd();
  }
  if (this.password) {
    output.writeFieldBegin('password', Thrift.Type.STRING, 2);
    output.writeString(this.password);
    output.writeFieldEnd();
  }
  if (this.instanceId) {
    output.writeFieldBegin('instanceId', Thrift.Type.STRING, 3);
    output.writeString(this.instanceId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftSecurityException = module.exports.ThriftSecurityException = function(args) {
  Thrift.TException.call(this, "ThriftSecurityException")
  this.name = "ThriftSecurityException"
  this.user = null;
  this.code = null;
  if (args) {
    if (args.user !== undefined) {
      this.user = args.user;
    }
    if (args.code !== undefined) {
      this.code = args.code;
    }
  }
};
Thrift.inherits(ThriftSecurityException, Thrift.TException);
ThriftSecurityException.prototype.name = 'ThriftSecurityException';
ThriftSecurityException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.user = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.code = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftSecurityException.prototype.write = function(output) {
  output.writeStructBegin('ThriftSecurityException');
  if (this.user) {
    output.writeFieldBegin('user', Thrift.Type.STRING, 1);
    output.writeString(this.user);
    output.writeFieldEnd();
  }
  if (this.code) {
    output.writeFieldBegin('code', Thrift.Type.I32, 2);
    output.writeI32(this.code);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

