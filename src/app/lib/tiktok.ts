'use server';
import crypto from 'crypto';

async function randomDate(tokenname: string) {
  console.log('tokenname: ', tokenname);
  const secretKey = 'mySecretKey';

  try {
    const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
    let decryptedData = decipher.update(tokenname, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');

    const tokenData = JSON.parse(decryptedData);
    const currentTime = Math.floor(Date.now() / 1000);
    console.log('tokenData: ', tokenData);
    console.log('currentTime: ', currentTime);
    if (tokenData.exp >= currentTime) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error in decryption or data parsing:', error);
    return false; 
  }
}

async function toktok(urlString: string, token: string) {
  const isValid = await randomDate(token);
  if (isValid) {
    const basicReg = /tiktok\.com(.*)\/video\/(\d+)/gm;
    const basicParsed = basicReg.exec(urlString);
    if (basicParsed) {
      let baseurl = `https://api2.musical.ly/aweme/v1/feed/?aweme_id=${basicParsed}&version_code=262&app_name=musical_ly&channel=App&device_id=null&os_version=14.4.2&device_platform=iphone&device_type=iPhone9&region=US&carrier_region=US`;
      try {
        const res = await fetch(baseurl);
        const base = await (await res.json()).aweme_list[0].video;
        console.log('toktok base: ', base);
        const result = {
          cover: {
            static: base.cover.url_list[0],
            dynamic: base.dynamic_cover.url_list[0],
          },
          video: {
            nowm: base.play_addr.url_list[0],
            wm: base.download_addr.url_list[0],
          },
        };
        console.log('toktok result: ', result);
        return result;
      } catch (error) {
        console.log(error);
      }
    } else {
      return { error: 'Invalid URL' };
    }
  } else {
    return { error: 'Invalid Token' };
  }
}

export default toktok;
