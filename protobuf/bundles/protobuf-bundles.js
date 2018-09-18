var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.awesomepackage = (function() {

    /**
     * Namespace awesomepackage.
     * @exports awesomepackage
     * @namespace
     */
    var awesomepackage = {};

    awesomepackage.AwesomeMessage = (function() {

        /**
         * Properties of an AwesomeMessage.
         * @memberof awesomepackage
         * @interface IAwesomeMessage
         * @property {string|null} [awesomeField] AwesomeMessage awesomeField
         */

        /**
         * Constructs a new AwesomeMessage.
         * @memberof awesomepackage
         * @classdesc Represents an AwesomeMessage.
         * @implements IAwesomeMessage
         * @constructor
         * @param {awesomepackage.IAwesomeMessage=} [properties] Properties to set
         */
        function AwesomeMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwesomeMessage awesomeField.
         * @member {string} awesomeField
         * @memberof awesomepackage.AwesomeMessage
         * @instance
         */
        AwesomeMessage.prototype.awesomeField = "";

        /**
         * Creates a new AwesomeMessage instance using the specified properties.
         * @function create
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {awesomepackage.IAwesomeMessage=} [properties] Properties to set
         * @returns {awesomepackage.AwesomeMessage} AwesomeMessage instance
         */
        AwesomeMessage.create = function create(properties) {
            return new AwesomeMessage(properties);
        };

        /**
         * Encodes the specified AwesomeMessage message. Does not implicitly {@link awesomepackage.AwesomeMessage.verify|verify} messages.
         * @function encode
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {awesomepackage.IAwesomeMessage} message AwesomeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwesomeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.awesomeField != null && message.hasOwnProperty("awesomeField"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.awesomeField);
            return writer;
        };

        /**
         * Encodes the specified AwesomeMessage message, length delimited. Does not implicitly {@link awesomepackage.AwesomeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {awesomepackage.IAwesomeMessage} message AwesomeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwesomeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwesomeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awesomepackage.AwesomeMessage} AwesomeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwesomeMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awesomepackage.AwesomeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.awesomeField = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AwesomeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awesomepackage.AwesomeMessage} AwesomeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwesomeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AwesomeMessage message.
         * @function verify
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwesomeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.awesomeField != null && message.hasOwnProperty("awesomeField"))
                if (!$util.isString(message.awesomeField))
                    return "awesomeField: string expected";
            return null;
        };

        /**
         * Creates an AwesomeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awesomepackage.AwesomeMessage} AwesomeMessage
         */
        AwesomeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.awesomepackage.AwesomeMessage)
                return object;
            var message = new $root.awesomepackage.AwesomeMessage();
            if (object.awesomeField != null)
                message.awesomeField = String(object.awesomeField);
            return message;
        };

        /**
         * Creates a plain object from an AwesomeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {awesomepackage.AwesomeMessage} message AwesomeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwesomeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.awesomeField = "";
            if (message.awesomeField != null && message.hasOwnProperty("awesomeField"))
                object.awesomeField = message.awesomeField;
            return object;
        };

        /**
         * Converts this AwesomeMessage to JSON.
         * @function toJSON
         * @memberof awesomepackage.AwesomeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwesomeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwesomeMessage;
    })();

    awesomepackage.ZZ = (function() {

        /**
         * Properties of a ZZ.
         * @memberof awesomepackage
         * @interface IZZ
         * @property {string|null} [aa] ZZ aa
         */

        /**
         * Constructs a new ZZ.
         * @memberof awesomepackage
         * @classdesc Represents a ZZ.
         * @implements IZZ
         * @constructor
         * @param {awesomepackage.IZZ=} [properties] Properties to set
         */
        function ZZ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZZ aa.
         * @member {string} aa
         * @memberof awesomepackage.ZZ
         * @instance
         */
        ZZ.prototype.aa = "";

        /**
         * Creates a new ZZ instance using the specified properties.
         * @function create
         * @memberof awesomepackage.ZZ
         * @static
         * @param {awesomepackage.IZZ=} [properties] Properties to set
         * @returns {awesomepackage.ZZ} ZZ instance
         */
        ZZ.create = function create(properties) {
            return new ZZ(properties);
        };

        /**
         * Encodes the specified ZZ message. Does not implicitly {@link awesomepackage.ZZ.verify|verify} messages.
         * @function encode
         * @memberof awesomepackage.ZZ
         * @static
         * @param {awesomepackage.IZZ} message ZZ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZZ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.aa != null && message.hasOwnProperty("aa"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.aa);
            return writer;
        };

        /**
         * Encodes the specified ZZ message, length delimited. Does not implicitly {@link awesomepackage.ZZ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awesomepackage.ZZ
         * @static
         * @param {awesomepackage.IZZ} message ZZ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZZ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZZ message from the specified reader or buffer.
         * @function decode
         * @memberof awesomepackage.ZZ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awesomepackage.ZZ} ZZ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZZ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awesomepackage.ZZ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.aa = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZZ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awesomepackage.ZZ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awesomepackage.ZZ} ZZ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZZ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZZ message.
         * @function verify
         * @memberof awesomepackage.ZZ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZZ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.aa != null && message.hasOwnProperty("aa"))
                if (!$util.isString(message.aa))
                    return "aa: string expected";
            return null;
        };

        /**
         * Creates a ZZ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awesomepackage.ZZ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awesomepackage.ZZ} ZZ
         */
        ZZ.fromObject = function fromObject(object) {
            if (object instanceof $root.awesomepackage.ZZ)
                return object;
            var message = new $root.awesomepackage.ZZ();
            if (object.aa != null)
                message.aa = String(object.aa);
            return message;
        };

        /**
         * Creates a plain object from a ZZ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awesomepackage.ZZ
         * @static
         * @param {awesomepackage.ZZ} message ZZ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZZ.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.aa = "";
            if (message.aa != null && message.hasOwnProperty("aa"))
                object.aa = message.aa;
            return object;
        };

        /**
         * Converts this ZZ to JSON.
         * @function toJSON
         * @memberof awesomepackage.ZZ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZZ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZZ;
    })();

    return awesomepackage;
})();