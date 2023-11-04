'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import toktok from '@/app/lib/tiktok';
import crypto from 'crypto';
import { FaPaste } from 'react-icons/fa6';

export default function Tiktok() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState({ cover: { static: '', dynamic: '' }, video: { nowm: '', wm: '' } });
  const [randomDateValue, setRandomDateValue] = useState('');

  useEffect(() => {
    const getTikTok = async () => {
      if (randomDateValue) {
        const res = (await toktok(url, randomDateValue)) as any;
        if (res && res.error) {
          alert(res.error);
        } else if (res) {
          setResult(res);
        }
      }
    };

    getTikTok();
  }, [randomDateValue, url]);

  const OnDownload = async () => {
    function randomDate() {
      const currentTime = Math.floor(Date.now() / 1000);
      const secretKey = 'mySecretKey';
      const data = { exp: currentTime + 10 };
      const cipher = crypto.createCipher('aes-256-cbc', secretKey);
      let encryptedToken = cipher.update(JSON.stringify(data), 'utf8', 'hex');
      encryptedToken += cipher.final('hex');
      return encryptedToken;
    }

    setRandomDateValue(randomDate());
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 bg-card rounded-lg shadowsm:px-6 md:px-8 lg:px-10">
        <h2 className="text-2xl font-medium text-gray-800 dark:text-white">Tiktok Downloader</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Download video tiktok</p>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <div className="flex items-center border rounded-lg">
            <input type="text" placeholder="https://www.tiktok.com/@username/video/1234567891234567891" className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-600 focus:outline-none focus:border-primary-500" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700" onClick={() => navigator.clipboard.readText().then((text) => setUrl(text))}>
              <FaPaste />
            </button>
          </div>
          <button className="px-4 py-2 mt-4 text-base font-semibold text-white transition duration-200 ease-in bg-primary-600 rounded-lg hover:bg-primary-700 focus:outline-none focus:bg-primary-500 bg-button" onClick={OnDownload}>
            Unduh
          </button>
        </div>
        {result.cover.static && (
          <div className="flex flex-col items-center justify-center w-full mt-4">
            <Image src={result.cover.static} alt="cover" width="640" height="640" />
            <a href={result.video.wm}> Download WM </a>
            <a href={result.video.nowm}> Download No WM </a>
          </div>
        )}
      </div>
    </div>
  );
}
