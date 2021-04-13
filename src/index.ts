export class HttpStatus {
	public static readonly 100: string = "Continue";
	public static readonly 101: string = "Switching Protocols";
	public static readonly 102: string = "Processing";
	public static readonly 200: string = "OK";
	public static readonly 201: string = "Created";
	public static readonly 202: string = "Accepted";
	public static readonly 203: string = "Non-authoritative Information";
	public static readonly 204: string = "No Content";
	public static readonly 205: string = "Reset Content";
	public static readonly 206: string = "Partial Content";
	public static readonly 207: string = "Multi-Status";
	public static readonly 208: string = "Already Reported";
	public static readonly 226: string = "IM Used";
	public static readonly 300: string = "Multiple Choices";
	public static readonly 301: string = "Moved Permanently";
	public static readonly 302: string = "Found";
	public static readonly 303: string = "See Other";
	public static readonly 304: string = "Not Modified";
	public static readonly 305: string = "Use Proxy";
	public static readonly 307: string = "Temporary Redirect";
	public static readonly 308: string = "Permanent Redirect";
	public static readonly 400: string = "Bad Request";
	public static readonly 401: string = "Unauthorized";
	public static readonly 402: string = "Payment Required";
	public static readonly 403: string = "Forbidden";
	public static readonly 404: string = "Not Found";
	public static readonly 405: string = "Method Not Allowed";
	public static readonly 406: string = "Not Acceptable";
	public static readonly 407: string = "Proxy Authentication Required";
	public static readonly 408: string = "Request Timeout";
	public static readonly 409: string = "Conflict";
	public static readonly 410: string = "Gone";
	public static readonly 411: string = "Length Required";
	public static readonly 412: string = "Precondition Failed";
	public static readonly 413: string = "Payload Too Large";
	public static readonly 414: string = "Request-URI Too Long";
	public static readonly 415: string = "Unsupported Media Type";
	public static readonly 416: string = "Requested Range Not Satisfiable";
	public static readonly 417: string = "Expectation Failed";
	public static readonly 418: string = "I'm a teapot";
	public static readonly 421: string = "Misdirected Request";
	public static readonly 422: string = "Unprocessable Entity";
	public static readonly 423: string = "Locked";
	public static readonly 424: string = "Failed Dependency";
	public static readonly 426: string = "Upgrade Required";
	public static readonly 428: string = "Precondition Required";
	public static readonly 429: string = "Too Many Requests";
	public static readonly 431: string = "Request Header Fields Too Large";
	public static readonly 444: string = "Connection Closed Without Response";
	public static readonly 451: string = "Unavailable For Legal Reasons";
	public static readonly 499: string = "Client Closed Request";
	public static readonly 500: string = "Internal Server Error";
	public static readonly 501: string = "Not Implemented";
	public static readonly 502: string = "Bad Gateway";
	public static readonly 503: string = "Service Unavailable";
	public static readonly 504: string = "Gateway Timeout";
	public static readonly 505: string = "HTTP Version Not Supported";
	public static readonly 506: string = "Variant Also Negotiates";
	public static readonly 507: string = "Insufficient Storage";
	public static readonly 508: string = "Loop Detected";
	public static readonly 510: string = "Not Extended";
	public static readonly 511: string = "Network Authentication Required";
	public static readonly 599: string = "Network Connect Timeout Error";

	public static readonly CONTINUE: string = "Continue";
	public static readonly SWITCHING_PROTOCOLS: string = "Switching Protocols";
	public static readonly PROCESSING: string = "Processing";
	public static readonly OK: string = "OK";
	public static readonly CREATED: string = "Created";
	public static readonly ACCEPTED: string = "Accepted";
	public static readonly NON_AUTHORITATIVE_INFORMATION: string =
		"Non-authoritative Information";
	public static readonly NO_CONTENT: string = "No Content";
	public static readonly RESET_CONTENT: string = "Reset Content";
	public static readonly PARTIAL_CONTENT: string = "Partial Content";
	public static readonly MULTI_STATUS: string = "Multi-Status";
	public static readonly ALREADY_REPORTED: string = "Already Reported";
	public static readonly IM_USED: string = "IM Used";
	public static readonly MULTIPLE_CHOICES: string = "Multiple Choices";
	public static readonly MOVED_PERMANENTLY: string = "Moved Permanently";
	public static readonly FOUND: string = "Found";
	public static readonly SEE_OTHER: string = "See Other";
	public static readonly NOT_MODIFIED: string = "Not Modified";
	public static readonly USE_PROXY: string = "Use Proxy";
	public static readonly TEMPORARY_REDIRECT: string = "Temporary Redirect";
	public static readonly PERMANENT_REDIRECT: string = "Permanent Redirect";
	public static readonly BAD_REQUEST: string = "Bad Request";
	public static readonly UNAUTHORIZED: string = "Unauthorized";
	public static readonly PAYMENT_REQUIRED: string = "Payment Required";
	public static readonly FORBIDDEN: string = "Forbidden";
	public static readonly NOT_FOUND: string = "Not Found";
	public static readonly METHOD_NOT_ALLOWED: string = "Method Not Allowed";
	public static readonly NOT_ACCEPTABLE: string = "Not Acceptable";
	public static readonly PROXY_AUTHENTICATION_REQUIRED: string =
		"Proxy Authentication Required";
	public static readonly REQUEST_TIMEOUT: string = "Request Timeout";
	public static readonly CONFLICT: string = "Conflict";
	public static readonly GONE: string = "Gone";
	public static readonly LENGTH_REQUIRED: string = "Length Required";
	public static readonly PRECONDITION_FAILED: string = "Precondition Failed";
	public static readonly PAYLOAD_TOO_LARGE: string = "Payload Too Large";
	public static readonly REQUEST_URI_TOO_LONG: string = "Request-URI Too Long";
	public static readonly UNSUPPORTED_MEDIA_TYPE: string =
		"Unsupported Media Type";
	public static readonly REQUESTED_RANGE_NOT_SATISFIABLE: string =
		"Requested Range Not Satisfiable";
	public static readonly EXPECTATION_FAILED: string = "Expectation Failed";
	public static readonly IM_A_TEAPOT: string = "I'm a teapot";
	public static readonly MISDIRECTED_REQUEST: string = "Misdirected Request";
	public static readonly UNPROCESSABLE_ENTITY: string = "Unprocessable Entity";
	public static readonly LOCKED: string = "Locked";
	public static readonly FAILED_DEPENDENCY: string = "Failed Dependency";
	public static readonly UPGRADE_REQUIRED: string = "Upgrade Required";
	public static readonly PRECONDITION_REQUIRED: string =
		"Precondition Required";
	public static readonly TOO_MANY_REQUESTS: string = "Too Many Requests";
	public static readonly REQUEST_HEADER_FIELDS_TOO_LARGE: string =
		"Request Header Fields Too Large";
	public static readonly CONNECTION_CLOSED_WITHOUT_RESPONSE: string =
		"Connection Closed Without Response";
	public static readonly UNAVAILABLE_FOR_LEGAL_REASONS: string =
		"Unavailable For Legal Reasons";
	public static readonly CLIENT_CLOSED_REQUEST: string =
		"Client Closed Request";
	public static readonly INTERNAL_SERVER_ERROR: string =
		"Internal Server Error";
	public static readonly NOT_IMPLEMENTED: string = "Not Implemented";
	public static readonly BAD_GATEWAY: string = "Bad Gateway";
	public static readonly SERVICE_UNAVAILABLE: string = "Service Unavailable";
	public static readonly GATEWAY_TIMEOUT: string = "Gateway Timeout";
	public static readonly HTTP_VERSION_NOT_SUPPORTED: string =
		"HTTP Version Not Supported";
	public static readonly VARIANT_ALSO_NEGOTIATES: string =
		"Variant Also Negotiates";
	public static readonly INSUFFICIENT_STORAGE: string = "Insufficient Storage";
	public static readonly LOOP_DETECTED: string = "Loop Detected";
	public static readonly NOT_EXTENDED: string = "Not Extended";
	public static readonly NETWORK_AUTHENTICATION_REQUIRED: string =
		"Network Authentication Required";
	public static readonly NETWORK_CONNECT_TIMEOUT_ERROR: string =
		"Network Connect Timeout Error";
}
