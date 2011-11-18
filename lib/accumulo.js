/* Copyright 2011 Jim Klucar <klucar@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *:WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var util = require('util');
var thrift = require('thrift');
var Accumulo = {
    "thrift" : {
      "data"      : require('../gen-nodejs/data_types'),
      "client"    : require('../gen-nodejs/client_types'),
      "gc"        : require( '../gen-nodejs/gc_types'),
      "master"    :  require('../gen-nodejs/master_types'),
      "security"  : require( '../gen-nodejs/security_types'),
      "tserver"   : require( '../gen-nodejs/tabletserver_types')
     
    },
    "services" : {
      "master"  : require('../gen-nodejs/MasterClientService'),
      "client"  : require('../gen-nodejs/ClientService'),
      "tserver" : require('../gen-nodejs/TabletClientService'),
      "gc"      : require('../gen-nodejs/GCMonitorService'),
      "logger"  : require('../gen-nodejs/MutationLogger')
    }
};


exports.accumulo = Accumulo;



