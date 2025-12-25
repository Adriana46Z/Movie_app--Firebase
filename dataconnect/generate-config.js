#!/usr/bin/env node

/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config();

const config = {
  specVersion: "v1alpha",
  serviceId: process.env.DATACONNECT_SERVICE_ID || "your-service-id",
  location: process.env.DATACONNECT_LOCATION || "us-central1",
  schema: {
    source: "./schema",
    datasource: {
      postgresql: {
        database: process.env.DATACONNECT_DATABASE || "your-database",
        cloudSql: {
          instanceId: process.env.DATACONNECT_INSTANCE_ID || "your-instance-id"
        }
      }
    }
  },
  connectorDirs: ["./movie-connector"]
};

const yamlContent = `# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

specVersion: "${config.specVersion}"
serviceId: "${config.serviceId}"
location: "${config.location}"
schema:
  source: "${config.schema.source}"
  datasource:
    postgresql:
      database: "${config.schema.datasource.postgresql.database}"
      cloudSql:
        instanceId: "${config.schema.datasource.postgresql.cloudSql.instanceId}"
connectorDirs: ${JSON.stringify(config.connectorDirs)}
`;

const outputPath = path.join(__dirname, 'dataconnect.yaml');
fs.writeFileSync(outputPath, yamlContent, 'utf8');
console.log('✅ Generated dataconnect.yaml from .env file');

