//
// Autogenerated by Thrift Compiler (0.7.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = require('./cloudtrace_types');
//HELPER FUNCTIONS AND STRUCTURES

var SpanReceiver_span_args = function(args) {
  this.span = null;
  if (args) {
    if (args.span !== undefined) {
      this.span = args.span;
    }
  }
};
SpanReceiver_span_args.prototype = {};
SpanReceiver_span_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.span = new ttypes.RemoteSpan();
        this.span.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpanReceiver_span_args.prototype.write = function(output) {
  output.writeStructBegin('SpanReceiver_span_args');
  if (this.span) {
    output.writeFieldBegin('span', Thrift.Type.STRUCT, 1);
    this.span.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SpanReceiver_span_result = function(args) {
};
SpanReceiver_span_result.prototype = {};
SpanReceiver_span_result.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpanReceiver_span_result.prototype.write = function(output) {
  output.writeStructBegin('SpanReceiver_span_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SpanReceiverClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
SpanReceiverClient.prototype = {};
SpanReceiverClient.prototype.span = function(span, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_span(span);
};

SpanReceiverClient.prototype.send_span = function(span) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('span', Thrift.MessageType.CALL, this.seqid);
  var args = new SpanReceiver_span_args();
  args.span = span;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};
var SpanReceiverProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
SpanReceiverProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

SpanReceiverProcessor.prototype.process_span = function(seqid, input, output) {
  var args = new SpanReceiver_span_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.span(args.span)
}

