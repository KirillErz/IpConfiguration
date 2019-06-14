using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;

namespace ConfigurationIP
{
    public class HttpHelper
    {

        private static bool isIE
        {
            get
            {
                var ieTokens = new[] {
                    "ie",
                    "internetexplorer"
                };
                var currentBrowserDescription = HttpContext.Current.Request.Browser.Browser;
                return ieTokens.Any(t => currentBrowserDescription.ToLower()
                    .Contains(t));
            }
        }

        public static HttpResponseMessage ResponseMessage()
        {
            return null;
        }

        public static HttpResponseMessage CreateBinaryResponse(
            byte[] content,
            string fileName,
            string contentType = null)
        {
            return CreateRawResponse(new ByteArrayContent(content),
                fileName);
        }

        public static HttpResponseMessage CreateRawResponse(
            HttpContent content,
            string fileName,
            string contentType = "application/octet-stream")
        {
            if (isIE)
                fileName = HttpContext.Current.Server.UrlEncode(fileName)
                    .Replace("+",
                        " ");

            var result = new HttpResponseMessage(HttpStatusCode.OK);
            result.Content = content;
            result.Content.Headers.ContentType = new MediaTypeHeaderValue(contentType);
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
            {
                FileName = fileName
            };
            return result;
        }
    }
}