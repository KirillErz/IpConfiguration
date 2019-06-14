using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Management;
using System.Management.Instrumentation;
using System.Diagnostics;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.IO;
using System.Text;
using System.Security;

namespace ConfigurationIP.Controllers
{
    public class SettingsIp
    {

        public IpProperties[] GetIP(string MacName)
        {
        
            List<IpProperties> ip = new List<IpProperties>();

            ManagementClass mc = new ManagementClass(
              "Win32_NetworkAdapterConfiguration");
            ManagementObjectCollection moc = mc.GetInstances();

            foreach (ManagementObject mo in moc)
            {

                // Make sure this is a IP enabled device. 
                // Not something like memory card or VM Ware
                if ((bool)mo["IPEnabled"]) 
                {
                    if (mo["MACAddress"].Equals(MacName))
                    {
                        IpProperties IpOption = new IpProperties();
                        IpOption.ipAddress = (string[])mo["IPAddress"];
                        IpOption.subnet = (string[])mo["IPSubnet"];
                        IpOption.gateway = (string[])mo["DefaultIPGateway"];
                        IpOption.dns = (string[])mo["DNSServerSearchOrder"];
                        ip.Add(IpOption);

                    }
                }
            }
            return ip.ToArray();
        }
        public static SecureString ReadPassword(string password)
        {
            SecureString secPass = new SecureString();
            for (int i = 0; i < password.Length; i++)
                secPass.AppendChar(password[i]);
            return secPass;
        }
        public void SetIP(SetIpProperties ipProperties)
        {
            using (var networkConfigMng = new ManagementClass("Win32_NetworkAdapterConfiguration"))
            {
                

                ManagementClass objMC =
                    new ManagementClass("Win32_NetworkAdapterConfiguration");
                ManagementObjectCollection objMOC = objMC.GetInstances();

                foreach (ManagementObject objMO in objMOC)
                {
                    if ((bool)objMO["IPEnabled"])
                    {
                        if (objMO["MACAddress"].Equals(ipProperties.MacName))
                        {
                            string ethernet = "Ethernet";
                            //File.WriteAllText(@"c:\temp\setIp.bat", "@echo off\necho Choose:\necho[A] Set Static IP\necho[B] Set DHCP\necho.\n: choice \nSET / P C =[A, B] ?\nfor %%? in (A) do if / I ' % C % ' == ' %%? ' goto A\nfor %%? in (B) do if / I ' % C % ' == ' %%? ' goto B\ngoto choice\n: A\n@echo off \necho 'Please enter Static IP Address Information'\necho 'Static IP Address:\nset /p IP_Addr=" + ipProperties.ipAddress + "\n" + "echo 'Default Gateway:'\nset /p D_Gate=" + ipProperties.gateway + "\n" + "echo 'Subnet Mask:'\nset /p Sub_Mask=" + ipProperties.subnet + "\n" + "echo 'Setting Static IP Information'\nnetsh interface ip set address 'Ethernet' static %IP_Addr% %Sub_Mask% %D_Gate% 1\nnetsh int ip show config\npause\ngoto end\n      \n:B\n@ECHO OFF\nECHO Resetting IP Address and Subnet Mask For DHCP \nnetsh int ip set address name = 'Ethernet' source = dhcp\n       \nipconfig /renew\n    \nECHO Here are the new settings for %computername%:\nnetsh int ip show config\n     \npause\ngoto end\n:end", Encoding.Default);
                            File.WriteAllText(@"c:\temp\ipSet.bat","netsh interface ip set address "+'"'+ethernet+'"'+" static "+ipProperties.ipAddress+" "+ ipProperties.subnet+" "+ipProperties.gateway+ " 1\nnetsh interface ip set dns "+'"'+ethernet+'"'+ " static "+ipProperties.dns+"\n", Encoding.Default);
                            File.WriteAllText(@"c:\MAMP\htdocs\ip.txt", ipProperties.ipAddress, Encoding.Default);
                            System.Diagnostics.Process proc = new System.Diagnostics.Process();
                            proc.StartInfo.UseShellExecute = false;
                            //proc.StartInfo.Domain = "HQMCDSOFT";
                            proc.StartInfo.UserName = "m2vw";
                            proc.StartInfo.Password = ReadPassword("AW6H7woz");
                            proc.StartInfo.FileName = @"c:\temp\ipSet.bat";
                            proc.StartInfo.WorkingDirectory = @"c:\temp";
                            proc.Start();
                        }
                    }
                }

                

            }           
        }

        public void TurnOnPC()
        {
            Process.Start("shutdown", "/s /f /t 0");
        }

        public void Reboot()
        {
            Process.Start("shutdown", "/r /f /t 0");
        }
    }

    public class IpProperties
    {
        public string[] ipAddress { get; set; }
        public string[] subnet { get; set; }
        public string[] gateway { get; set; }
        public string[] dns { get; set; }
    }

    public class SetIpProperties
    {
        public string MacName { get; set; }
        public string ipAddress { get; set; }
        public string subnet { get; set; }
        public string gateway { get; set; }
        public string dns { get; set; }
    }
}