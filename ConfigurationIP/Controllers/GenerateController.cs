using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Http;
using System.Web.Script.Serialization;
using ConfigurationIP.Controllers.DTO;
using ConfigurationIP.Controllers;
using GenerateRequest = ConfigurationIP.Controllers.DTO.GenerateRequest;
using Settings = ConfigurationIP.Controllers.DTO.Settings;
using TurnOnPCRequest = ConfigurationIP.Controllers.DTO.TurnOnPCRequest;

namespace ConfigurationIP.Controllers
{
    public class GenerateController : ApiController
    {
       
        [HttpPost]
        public System.Net.Http.HttpResponseMessage Generate(GenerateRequest request)
        {
           

            var serializer = new JavaScriptSerializer();
            IpConfiguration def = serializer.Deserialize<IpConfiguration>(request.Data);
            
            string[] ipAddress = def.ipAddress.ToCharArray().Select(c => c.ToString()).ToArray();
            string[] mask = def.mask.ToCharArray().Select(c => c.ToString()).ToArray();
            string[] gateway = def.gateway.ToCharArray().Select(c => c.ToString()).ToArray();
            string[] dns = def.dns.ToCharArray().Select(c => c.ToString()).ToArray();

            SettingsIp settingsIp = new SettingsIp();
           



            return HttpHelper.ResponseMessage();
        }

        [HttpPost]
        public void SetSettingsIP(SetIpProperties request)
        {
            SettingsIp settingsIp = new SettingsIp();
            settingsIp.SetIP(request);
        }

        [HttpPost]
        public Settings GetSettingsIP(requestmacAdress request)
        {
            var __response = new Settings();
            SettingsIp settingsIp = new SettingsIp();
            var IpOption = settingsIp.GetIP(request.macAdress);
            if (IpOption.Any(item => item.ipAddress != null))
            {
                __response.ipAddress = String.Join(", ", IpOption[0].ipAddress[0]);
                __response.subnet = String.Join(", ", IpOption[0].subnet[0]);
                __response.gateway = String.Join(", ", IpOption[0].gateway);
                __response.dns = String.Join(", ", IpOption[0].dns);
            }
            return __response;
        }

        [HttpPost]
        public void  TurnOnPC()
        {
            SettingsIp settingsIp = new SettingsIp();
            settingsIp.TurnOnPC();

        }

        [HttpPost]
        public void Reboot()
        {
            SettingsIp settingsIp = new SettingsIp();
            settingsIp.Reboot();

        }
    }

    namespace DTO
    {
        public class requestmacAdress
        {
            public string macAdress { get; set; }
        }
        

        public class Settings
        {
            public string id { get; set; }
            public string ipAddress { get; set; }
            public string subnet { get; set; }
            public string gateway { get; set; }
            public string dns { get; set; }
        }



        public class IpConfiguration
        {
            public string id { get; set; }
            public string ipAddress { get; set; }
            public string mask { get; set; }
            public string  gateway { get; set; }
            public string  dns { get; set; }
            public bool staticIp { get; set; }
            public bool dynamicIp { get; set; }
           
        }

        public class GenerateRequest
        {
            public string Data { get; set; }
        }

        public class TurnOnPCRequest
        {
            public string MassageTurnOnPC { get; set; }
        }

        public class RebootRequest
        {
            public string MassageReboot { get; set; }
        }
    }

  
}