const videoAssets = [
  // {
  //   "name": "CMAF Music Channel",
  //   "manifestUri": "https://82934cf9c8696bd2.mediapackage.us-east-1.amazonaws.com/out/v1/5a762a8c69ea44e98ec2c9a9f69e2217/CMAF_HLS/index.m3u8",
  // },
  // {
  //   "name": "DASH Music Channel",
  //   "manifestUri": "https://82934cf9c8696bd2.mediapackage.us-east-1.amazonaws.com/out/v1/188139cc2f7f4137ad48d1600f815898/index.mpd",
  // },
  // {
  //   "name": "HLS Music Channel",
  //   "manifestUri": "https://82934cf9c8696bd2.mediapackage.us-east-1.amazonaws.com/out/v1/50a4457f1ae24d18adb88c2ed229197e/index.m3u8",
  // },
  
  // {
  //   "name": "JOMA",
  //   "manifestUri": "https://rr1---sn-upbvbu-b05z.googlevideo.com/videoplayback?expire=1644618697&ei=aI8GYvzWOvO-j-8P7Liv-Ac&ip=2803%3Ad100%3Ae080%3A5dd%3A6404%3Aa7b7%3A59d1%3A59d0&id=o-AKHalT-1Xi0vQW5D2tNO-PhtBGN3UNp7u82cu8fMJiXC&itag=315&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C308%2C315%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=y4&mm=31%2C29&mn=sn-upbvbu-b05z%2Csn-hp57knzz&ms=au%2Crdu&mv=m&mvi=1&pl=42&initcwndbps=971250&vprv=1&mime=video%2Fwebm&ns=PH3VATYhix1WEynuDxFcgzgG&gir=yes&clen=361720932&dur=537.899&lmt=1622603653748348&mt=1644596698&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5532432&n=nKAnlB3cbdhaLCn&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALkJjVe0EU7oPaaX8rfn1H7-YnThK8Kf6Hnr9R1mfATWAiAc4SZR2cx7oZI6zDlnLmhmeetnr1sP4riFyGZQlVg9xg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhALT9JQe2mvOR6WYrEw7mkMu6OegBWnADxxSUA2gwhS7EAiBEdheOwuPZzUAIbBOsAER34VHQ3RtEIZusNfOMMyhteA%3D%3D",
  // },
  // {
  //   "name": "Youtube Video Live",
  //   "manifestUri": "https://manifest.googlevideo.com/api/manifest/hls_playlist/expire/1644617329/ei/EYoGYsPTAqKGlAPRuZTICA/ip/2803:d100:e080:5dd:6404:a7b7:59d1:59d0/id/36YnV9STBqc.6/itag/95/source/yt_live_broadcast/requiressl/yes/ratebypass/yes/live/1/sgoap/gir%3Dyes%3Bitag%3D140/sgovp/gir%3Dyes%3Bitag%3D136/hls_chunk_host/rr1---sn-upbvbu-b056.googlevideo.com/playlist_duration/30/manifest_duration/30/vprv/1/playlist_type/DVR/initcwndbps/8140/mh/Lz/mm/44/mn/sn-upbvbu-b056/ms/lva/mv/m/mvi/1/pl/42/dover/11/pacing/0/keepalive/yes/fexp/24001373,24007246/beids/23886211/mt/1644595240/sparams/expire,ei,ip,id,itag,source,requiressl,ratebypass,live,sgoap,sgovp,playlist_duration,manifest_duration,vprv,playlist_type/sig/AOq0QJ8wRAIgEGyry7hcoETPVlJGXVAPEKsQDLneHU5RVG23wd7Zu-kCICHV12FXv7-GT-AVU9Pc5JS7iOFPNqzs_J7CjQ6CDb04/lsparams/hls_chunk_host,initcwndbps,mh,mm,mn,ms,mv,mvi,pl/lsig/AG3C_xAwRAIgI_1UKX9sOMiek9WiKrI9IgC5-IcK0AZsJd6vfHU4SKcCIDj0WXXCp5RMOq_5Ak0Nh6uk_UKdJbci-8P5-PbnkG67/playlist/index.m3u8",
  // },
  // {
  //   "name": "CMAF Mini Video Live",
  //   "manifestUri": "https://82934cf9c8696bd2.mediapackage.us-east-1.amazonaws.com/out/v1/e2908ebfe98545deada3506c3e05b0e9/CMAF_HLS/index.m3u8",
  // },
  // {
  //   "name": "DASH Mini Video Live",
  //   "manifestUri": "https://82934cf9c8696bd2.mediapackage.us-east-1.amazonaws.com/out/v1/04c2c4cc6f2a4194ac20e5af73ac322e/index.mpd",
  // }, 
  // {
  //   "name": "HLS Mini Video Live",
  //   "manifestUri": "https://82934cf9c8696bd2.mediapackage.us-east-1.amazonaws.com/out/v1/a195630aef5c41078a5b5ad87915b330/index.m3u8",
  // },
  // {
  //   "name": "CMAF React-Native Live",
  //   "manifestUri": "https://c75a7e79204e539d.mediapackage.us-east-1.amazonaws.com/out/v1/c69146d6e8474045b002d41153e989fc/CMAF_HLS/index.m3u8",
  // },
  // {
  //   "name": "DASH React-Native Live",
  //   "manifestUri": "https://c75a7e79204e539d.mediapackage.us-east-1.amazonaws.com/out/v1/b3c63475fcc244bba267323465b12d8e/index.mpd",
  // }, 
  // {
  //   "name": "HLS React-Native Live",
  //   "manifestUri": "https://c75a7e79204e539d.mediapackage.us-east-1.amazonaws.com/out/v1/55e11ed61ffd4ddaa55c95dfccad87f0/index.m3u8",
  // },
  // {
  //   "name": "AWS2C M3U8 Live Test",
  //   "manifestUri": "https://d1tms42mnygb3e.cloudfront.net/out/v1/91ea0faf0fc44bb1b602444e960e33fe/index.m3u8",
  // },
  {
    "name": 'Angel One MPEG-DASH',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
  },
  {
    "name": 'Big Buck Bunny HLS',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8'
  }, {
    "name": 'Big Buck Bunny: the Dark Truths of a Video Dev Cartoon "DASH",',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dark_truth.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths/dash.mpd',
    "source": "SHAKA",
    "feature": ["DASH", "HIGH_DEFINITION", "MP4", "WEBM", "OFFLINE"],
  },
  {
    "name": 'Big Buck Bunny: the Dark Truths of a Video Dev Cartoon "HLS",',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dark_truth.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8',
    "source": "SHAKA",
    "description": "'A serious documentary about a problem plaguing video developers.'",
    "markAsFeatured": "'Big Buck Bunny: the Dark Truths'",
    "feature": ["HLS", "HIGH_DEFINITION", "MP4", "OFFLINE"],
  },
  {
    "name": 'Angel One "multicodec, multilingual",',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/angel_one.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd',
    "source": "SHAKA",
    "description": "'A clip from a classic Star Trek TNG episode, presented in MPEG-DASH.'",
    "markAsFeatured": "'Angel One'",
    "feature": ["DASH", "MP4", "MULTIPLE_LANGUAGES", "SUBTITLES", "WEBM", "OFFLINE"],
  },
  // {
  //   "name": 'Angel One "multicodec, multilingual, Widevine",',
  //   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/angel_one.png',
  //   "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd',
  //   "source": "SHAKA",
  //   "keySystem": "WIDEVINE",
  //   "feature": ["DASH", "MP4", "MULTIPLE_LANGUAGES", "SUBTITLES", "WEBM", "OFFLINE"],
  //   "licenseServer": {
  //     "server": 'com.widevine.alpha',
  //     "url": 'https://cwip-shaka-proxy.appspot.com/no_auth'
  //   },
  // },
  // {
  //   "name": 'Angel One "multicodec, multilingual, ClearKey server",',
  //   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/angel_one.png',
  //   "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/angel-one-clearkey/dash.mpd',
  //   "source": "SHAKA",
  //   "keySystem": "CLEAR_KEY",
  //   "feature": ["DASH", "MP4", "MULTIPLE_LANGUAGES", "SUBTITLES", "WEBM", "OFFLINE"],
  //   "licenseServer": {
  //     "server": 'org.w3.clearkey',
  //     "url": 'https://cwip-shaka-proxy.appspot.com/clearkey?_u3wDe7erb7v8Lqt8A3QDQ=ABEiM0RVZneImaq7zN3u_w'
  //   },
  // },
  {
    "name": 'Angel One "HLS, MP4, multilingual",',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/angel_one.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8',
    "source": "SHAKA",
    "feature": ["HLS", "MP4", "MULTIPLE_LANGUAGES", "SUBTITLES", "SURROUND", "OFFLINE"],
  },
  // {
  //   "name": 'Angel One "HLS, MP4, multilingual, Widevine",',
  //   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/angel_one.png',
  //   "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine-hls/hls.m3u8',
  //   "source": "SHAKA",
  //   "keySystem": "WIDEVINE",
  //   "feature": ["HLS", "MP4", "MULTIPLE_LANGUAGES", "SUBTITLES", "SURROUND", "OFFLINE"],
  //   "licenseServer": {
  //     "server": 'com.widevine.alpha',
  //     "url": 'https://cwip-shaka-proxy.appspot.com/no_auth'
  //   },
  // },
  // {
  //   "name": 'Angel One "HLS, MP4, multilingual, Widevine, single linear ad",',
  //   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/angel_one.png',
  //   "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine-hls/hls.m3u8',
  //   "source": "SHAKA",
  //   "keySystem": "WIDEVINE",
  //   "AdTagUri": "shakaAssets.AdTag.SINGLE_LINEAR_AD",
  //   "feature": ["HLS", "MP4", "MULTIPLE_LANGUAGES", "SUBTITLES", "SURROUND", "OFFLINE"],
  //   "licenseServer": {
  //     "server": 'com.widevine.alpha',
  //     "url": 'https://cwip-shaka-proxy.appspot.com/no_auth'
  //   },
  // },
  // {
  //   "name": 'Angel One "HLS, MP4, multilingual, Widevine, single non-linear ad",',
  //   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/angel_one.png',
  //   "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine-hls/hls.m3u8',
  //   "source": "SHAKA",
  //   "keySystem": "WIDEVINE",
  //   "adTagUri": "shakaAssets.AdTag.SINGLE_NON_LINEAR_AD",
  //   "feature": ["HLS", "MP4", "MULTIPLE_LANGUAGES", "SUBTITLES", "SURROUND", "OFFLINE"],
  //   "licenseServer": {
  //     "server": 'com.widevine.alpha',
  //     "url": 'https://cwip-shaka-proxy.appspot.com/no_auth'
  //   },
  // },
  {
    "name": 'Sintel 4k (multicodec)',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/sintel.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/sintel/dash.mpd',
    "source": "SHAKA",
    "feature": ["DASH", "HIGH_DEFINITION", "MP4", "SUBTITLES", "WEBM", "OFFLINE"],
  },
  {
    "name": 'Sintel w/ trick mode (MP4 only, 720p)',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/sintel.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/sintel-trickplay/dash.mpd',
    "source": "SHAKA",
    "feature": ["DASH", "MP4", "SUBTITLES", "TRICK_MODE", "OFFLINE"],
  },
  {
    "name": 'Sintel 4k (WebM only),',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/sintel.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/sintel-webm-only/dash.mpd',
    "source": "SHAKA",
    "feature": ["DASH", "HIGH_DEFINITION", "SUBTITLES", "WEBM", "OFFLINE"],
  },
  {
    "name": 'Sintel 4k (MP4 only),',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/sintel.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/sintel-mp4-only/dash.mpd',
    "source": "SHAKA",
    "feature": ["DASH", "HIGH_DEFINITION", "MP4", "SUBTITLES", "OFFLINE"],
  },
  // {
  //   "name": 'Sintel 4k (multicodec, Widevine)',
  //   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/sintel.png',
  //   "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/sintel-widevine/dash.mpd',
  //   "source": "SHAKA",
  //   "keySystem": "WIDEVINE",
  //   "feature": ["DASH", "HIGH_DEFINITION", "MP4", "SUBTITLES", "WEBM", "OFFLINE"],
  //   "licenseServer": {
  //     "server": 'com.widevine.alpha',
  //     "url": 'https://cwip-shaka-proxy.appspot.com/no_auth'
  //   },
  //   "extraConfig": {
  //     "drm": {
  //       "advanced": {
  //         'com.widevine.alpha': {
  //           "serverCertificateUri": 'https://cwip-shaka-proxy.appspot.com/service-cert',
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   "name": 'Sintel 4k (multicodec, Widevine, ads)',
  //   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/sintel.png',
  //   "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/sintel-widevine/dash.mpd',
  //   "source": "SHAKA",
  //   "description": "'A Blender Foundation short film, protected by Widevine encryption with pre-roll, mid-roll, and post-roll ads.'",
  //   "markAsFeatured": "'Sintel'",
  //   "adTagUri": "shakaAssets.AdTag.AD_POD_PREROLL_MIDROLL_POSTROLL",
  //   "keySystem": "WIDEVINE",
  //   "feature": ["DASH", "HIGH_DEFINITION", "MP4", "SUBTITLES", "WEBM", "OFFLINE"],
  //   "licenseServer": {
  //     "server": 'com.widevine.alpha',
  //     "url": 'https://cwip-shaka-proxy.appspot.com/no_auth'
  //   },
  // },
  {
    "name": 'Sintel 4k (MP4, VTT in MP4)',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/sintel.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/sintel-mp4-wvtt/dash.mpd',
    "source": "SHAKA",
    "feature": ["DASH", "HIGH_DEFINITION", "MP4", "SUBTITLES", "OFFLINE"],
  },
  {
    "name": 'Sintel w/ 44 subtitle languages',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/sintel.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/sintel-many-subs/dash.mpd',
    "source": "SHAKA",
    "feature": ["DASH", "MP4", "SUBTITLES", "SURROUND", "OFFLINE"],
  },
  {
    "name": 'Heliocentrism "multicodec, multiperiod",',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/heliocentricism.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/heliocentrism/heliocentrism.mpd',
    "source": "SHAKA",
    "feature": ["DASH", "MP4", "WEBM", "OFFLINE"],
  },
  {
    "name": 'Heliocentrism "multicodec, multiperiod, xlink",',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/heliocentricism.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/heliocentrism-xlink/heliocentrism.mpd',
    "source": "SHAKA",
    "feature": ["DASH", "MP4", "WEBM", "XLINK", "OFFLINE"],
    // From: http://dig.ccmixter.org/files/JeffSpeed68/53327
    // Licensed under Creative Commons BY-NC 3.0.
    // Free for non-commercial use with attribution.
    // http://creativecommons.org/licenses/by-nc/3.0/
  },
  {
    "name": '"Dig the Uke" by Stefan Kartenberg "audio only, multicodec",',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/audio_only.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/dig-the-uke-clear/dash.mpd',
    "source": "SHAKA",
    "description": "'An audio-only presentation performed by Stefan Kartenberg.'",
    "markAsFeatured": "'Dig the Uke'",
    "feature": ["DASH", "MP4", "AUDIO_ONLY", "WEBM", "OFFLINE"],
    // From: http://dig.ccmixter.org/files/JeffSpeed68/53327
    // Licensed under Creative Commons BY-NC 3.0.
    // Free for non-commercial use with attribution.
    // http://creativecommons.org/licenses/by-nc/3.0/
  },
  // {
  //   "name": '"Dig the Uke" by Stefan Kartenberg "audio only, multicodec, Widevine",',
  //   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/audio_only.png',
  //   "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/dig-the-uke/dash.mpd',
  //   "source": "SHAKA",
  //   "keySystem": "WIDEVINE",
  //   "feature": ["DASH", "MP4", "AUDIO_ONLY", "WEBM", "OFFLINE"],
  //   "licenseServer": {
  //     "server": 'com.widevine.alpha',
  //     "url": 'https://cwip-shaka-proxy.appspot.com/no_auth'
  //   },
  // },
  {
    "name": 'Tears of Steel "multicodec, TTML",',
    "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
    "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/tos-ttml/dash.mpd',
    "source": "SHAKA",
    "feature": ["DASH", "HIGH_DEFINITION", "MP4", "SUBTITLES", "WEBM", "OFFLINE"],
  }
];

module.exports = {
  videoAssets
};
//     }, {
//       "name": 'Tears of Steel "HLS, Server Side ads",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/tos/hls.m3u8',
//       "source": "SHAKA",
//       "feature": "HLS",
//       "feature": "HIGH_DEFINITION",
//       "feature": "MP4",
//       "feature": "OFFLINE",
//       .setIMAContentSourceId "'2528370'",
//       .setIMAVideoId "'tears-of-steel'",
//     }, {
//       "name": 'Tears of Steel "live, DASH, Server Side ads",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/tos-ttml/dash.mpd',
//       "source": "SHAKA",
//       "feature": "DASH",
//       "feature": "MP4",
//       "feature": "SUBTITLES",
//       "feature": "LIVE",
//       .setIMAAssetKey "'PSzZMzAkSXCmlJOWDmRj8Q'",
//     }, {
//       "name": 'Tears of Steel "multicodec, surround + stereo",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/tos-surround/dash.mpd',
//       "source": "SHAKA",
//       "feature": "DASH",
//       "feature": "MP4",
//       "feature": "SURROUND",
//       "feature": "WEBM",
//       "feature": "OFFLINE",
//     }, {
//       "name": 'Tears of Steel "multicodec, surround + stereo, single skippable ad",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/tos-surround/dash.mpd',
//       "source": "SHAKA",
//       "adTagUri": "shakaAssets.AdTag.SINGLE_SKIPPABLE_AD",
//       "feature": "DASH",
//       "feature": "MP4",
//       "feature": "SURROUND",
//       "feature": "WEBM",
//       "feature": "OFFLINE",
//     }, {
//       "name": 'Shaka Player History "multicodec, live, DASH",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/shaka.png',
//       "manifestUri": 'https://storage.googleapis.com/shaka-live-assets/player-source.mpd',
//       "source": "SHAKA",
//       "feature": "DASH",
//       "feature": "HIGH_DEFINITION",
//       "feature": "LIVE",
//       "feature": "MP4",
//       "feature": "WEBM",
//     }, {
//       "name": 'Shaka Player History "live, HLS",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/shaka.png',
//       "manifestUri": 'https://storage.googleapis.com/shaka-live-assets/player-source.m3u8',
//       "source": "SHAKA",
//       "description": "'A self-indulgent HLS livestream.'",
//       "markAsFeatured":  "'Shaka Player History'",
//       "feature": "HIGH_DEFINITION",
//       "feature": "HLS",
//       "feature": "LIVE",
//       "feature": "MP4",
//       // End Shaka assets }}}
//       // Axinom assets {{{
//       // Src: https://github.com/Axinom/dash-test-vectors
//     }, {
//       "name": 'Multi-DRM',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://media.axprod.net/TestVectors/v7-MultiDRM-SingleKey/Manifest.mpd',
//       "source": "AXINOM",
//       "keySystem": "PLAYREADY",
//       "keySystem": "WIDEVINE",
//       "feature": "DASH",
//       "feature": "HIGH_DEFINITION",
//       "feature": "MP4",
//       "feature": "MULTIPLE_LANGUAGES",
//       "feature": "SUBTITLES",
//       "licenseServer": 'com.widevine.alpha',
//       'https://drm-widevine-licensing.axtest.net/AcquireLicense'
//       ",
//       "licenseServer": 'com.microsoft.playready',
//       'https://drm-playready-licensing.axtest.net/AcquireLicense'
//       ",
//       .addLicenseRequestHeader "'X-AxDRM-Message', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiYjMzNjRlYjUtNTFmNi00YWUzLThjOTgtMzNjZWQ1ZTMxYzc4IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImtleXMiOlt7ImlkIjoiOWViNDA1MGQtZTQ0Yi00ODAyLTkzMmUtMjdkNzUwODNlMjY2IiwiZW5jcnlwdGVkX2tleSI6ImxLM09qSExZVzI0Y3Iya3RSNzRmbnc9PSJ9XX19.4lWwW46k-oWcah8oN18LPj5OLS5ZU-_AQv7fe0JhNjA'",
//     }, {
//       "name": 'Multi-DRM, multi-key',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://media.axprod.net/TestVectors/v7-MultiDRM-MultiKey/Manifest.mpd',
//       "source": "AXINOM",
//       "keySystem": "PLAYREADY",
//       "keySystem": "WIDEVINE",
//       "feature": "DASH",
//       "feature": "HIGH_DEFINITION",
//       "feature": "MP4",
//       "feature": "MULTIPLE_LANGUAGES",
//       "feature": "SUBTITLES",
//       "licenseServer": 'com.widevine.alpha',
//       'https://drm-widevine-licensing.axtest.net/AcquireLicense'
//       ",
//       "licenseServer": 'com.microsoft.playready',
//       'https://drm-playready-licensing.axtest.net/AcquireLicense'
//       ",
//       .addLicenseRequestHeader "'X-AxDRM-Message', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiYjMzNjRlYjUtNTFmNi00YWUzLThjOTgtMzNjZWQ1ZTMxYzc4IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImtleXMiOlt7ImlkIjoiODAzOTliZjUtOGEyMS00MDE0LTgwNTMtZTI3ZTc0OGU5OGMwIiwiZW5jcnlwdGVkX2tleSI6ImxpTkpxVmFZa05oK01LY3hKRms3SWc9PSJ9LHsiaWQiOiI5MDk1M2UwOS02Y2IyLTQ5YTMtYTI2MC03YTVmZWZlYWQ0OTkiLCJlbmNyeXB0ZWRfa2V5Ijoia1l0SEh2cnJmQ01lVmRKNkxrYmtuZz09In0seyJpZCI6IjBlNGRhOTJiLWQwZTgtNGE2Ni04YzNmLWMyNWE5N2ViNjUzMiIsImVuY3J5cHRlZF9rZXkiOiI3dzdOWkhITE1nSjRtUUtFSzVMVE1RPT0ifSx7ImlkIjoiNTg1ZjIzM2YtMzA3Mi00NmYxLTlmYTQtNmRjMjJjNjZhMDE0IiwiZW5jcnlwdGVkX2tleSI6IkFjNFVVbVl0Qko1blBROU4xNXJjM2c9PSJ9LHsiaWQiOiI0MjIyYmQ3OC1iYzQ1LTQxYmYtYjYzZS02ZjgxNGRjMzkxZGYiLCJlbmNyeXB0ZWRfa2V5IjoiTzZGTzBmcVNXb3BwN2JqYy9ENGxNQT09In1dfX0.uF6YlKAREOmbniAeYiH070HSJhV0YS7zSKjlCtiDR5Y'",
//     }, {
//       "name": 'Multi-DRM, multi-key, multi-Period',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://media.axprod.net/TestVectors/v7-MultiDRM-MultiKey-MultiPeriod/Manifest.mpd',
//       "source": "AXINOM",
//       "keySystem": "PLAYREADY",
//       "keySystem": "WIDEVINE",
//       "feature": "DASH",
//       "feature": "HIGH_DEFINITION",
//       "feature": "MP4",
//       "feature": "MULTIPLE_LANGUAGES",
//       "feature": "SUBTITLES",
//       "licenseServer": 'com.widevine.alpha',
//       'https://drm-widevine-licensing.axtest.net/AcquireLicense'
//       ",
//       "licenseServer": 'com.microsoft.playready',
//       'https://drm-playready-licensing.axtest.net/AcquireLicense'
//       ",
//       .addLicenseRequestHeader "'X-AxDRM-Message', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiYjMzNjRlYjUtNTFmNi00YWUzLThjOTgtMzNjZWQ1ZTMxYzc4IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImtleXMiOlt7ImlkIjoiMDg3Mjc4NmUtZjllNy00NjVmLWEzYTItNGU1YjBlZjhmYTQ1IiwiZW5jcnlwdGVkX2tleSI6IlB3NitlRVlOY3ZqWWJmc2gzWDNmbWc9PSJ9LHsiaWQiOiJjMTRmMDcwOS1mMmI5LTQ0MjctOTE2Yi02MWI1MjU4NjUwNmEiLCJlbmNyeXB0ZWRfa2V5IjoiLzErZk5paDM4bXFSdjR5Y1l6bnQvdz09In0seyJpZCI6IjhiMDI5ZTUxLWQ1NmEtNDRiZC05MTBmLWQ0YjVmZDkwZmJhMiIsImVuY3J5cHRlZF9rZXkiOiJrcTBKdVpFanBGTjhzYVRtdDU2ME9nPT0ifSx7ImlkIjoiMmQ2ZTkzODctNjBjYS00MTQ1LWFlYzItYzQwODM3YjRiMDI2IiwiZW5jcnlwdGVkX2tleSI6IlRjUlFlQld4RW9IT0tIcmFkNFNlVlE9PSJ9LHsiaWQiOiJkZTAyZjA3Zi1hMDk4LTRlZTAtYjU1Ni05MDdjMGQxN2ZiYmMiLCJlbmNyeXB0ZWRfa2V5IjoicG9lbmNTN0dnbWVHRmVvSjZQRUFUUT09In0seyJpZCI6IjkxNGU2OWY0LTBhYjMtNDUzNC05ZTlmLTk4NTM2MTVlMjZmNiIsImVuY3J5cHRlZF9rZXkiOiJlaUkvTXNsbHJRNHdDbFJUL0xObUNBPT0ifSx7ImlkIjoiZGE0NDQ1YzItZGI1ZS00OGVmLWIwOTYtM2VmMzQ3YjE2YzdmIiwiZW5jcnlwdGVkX2tleSI6IjJ3K3pkdnFycERWM3hSMGJKeTR1Z3c9PSJ9LHsiaWQiOiIyOWYwNWU4Zi1hMWFlLTQ2ZTQtODBlOS0yMmRjZDQ0Y2Q3YTEiLCJlbmNyeXB0ZWRfa2V5IjoiL3hsU0hweHdxdTNnby9nbHBtU2dhUT09In0seyJpZCI6IjY5ZmU3MDc3LWRhZGQtNGI1NS05NmNkLWMzZWRiMzk5MTg1MyIsImVuY3J5cHRlZF9rZXkiOiJ6dTZpdXpOMnBzaTBaU3hRaUFUa1JRPT0ifV19fQ.BXr93Et1krYMVs-CUnf7F3ywJWFRtxYdkR7Qn4w3-to'",
//     }, {
//       "name": 'Clear, single-Period',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://media.axprod.net/TestVectors/v7-Clear/Manifest.mpd',
//       "source": "AXINOM",
//       "feature": "DASH",
//       "feature": "HIGH_DEFINITION",
//       "feature": "MP4",
//       "feature": "MULTIPLE_LANGUAGES",
//       "feature": "SUBTITLES",
//       "feature": "OFFLINE",
//     }, {
//       "name": 'Clear, multi-Period',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://media.axprod.net/TestVectors/v7-Clear/Manifest_MultiPeriod.mpd',
//       "source": "AXINOM",
//       "feature": "DASH",
//       "feature": "HIGH_DEFINITION",
//       "feature": "MP4",
//       "feature": "MULTIPLE_LANGUAGES",
//       "feature": "SUBTITLES",
//       "feature": "OFFLINE",
//     }, {
//       "name": 'Clear, Live DASH',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/axinom_test.png',
//       "manifestUri": 'https://akamai-axtest.akamaized.net/routes/lapd-v1-acceptance/www_c4/Manifest.mpd',
//       "source": "AXINOM",
//       // Disabled pending resolution of https://github.com/Axinom/public-test-vectors/issues/16
//       // Disabled pending resolution of https://github.com/Axinom/public-test-vectors/issues/17
//       "disabled":  true,
//       "feature": "LIVE",
//       "feature": "MP4",
//       "feature": "DASH",
//     }, {
//       "name": 'Clear, Live HLS',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/axinom_test.png',
//       "manifestUri": 'https://akamai-axtest.akamaized.net/routes/lapd-v1-acceptance/www_c4/Manifest.m3u8',
//       "source": "AXINOM",
//       // Disabled pending resolution of https://github.com/Axinom/public-test-vectors/issues/17
//       "disabled":  true,
//       "feature": "HLS",
//       "feature": "LIVE",
//       "feature": "MP4",
//       // End Axinom assets }}}
//       // Unified Streaming assets {{{
//       // Src: http://demo.unified-streaming.com/features.html
//     }, {
//       "name": 'Tears of Steel',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.mpd',
//       "source": "UNIFIED_STREAMING",
//       "feature": "DASH",
//       "feature": "HIGH_DEFINITION",
//       "feature": "MP4",
//       "feature": "OFFLINE",
//     }, {
//       "name": 'Tears of Steel "HLS, Subtitles",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel-multiple-subtitles.ism/.m3u8',
//       "source": "UNIFIED_STREAMING",
//       "feature": "HLS",
//       "feature": "HIGH_DEFINITION",
//       "feature": "MP4",
//       "feature": "SUBTITLES",
//       "feature": "OFFLINE",
//     }, {
//       "name": 'Tears of Steel "Widevine",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel-dash-widevine.ism/.mpd',
//       "source": "UNIFIED_STREAMING",
//       "keySystem": "WIDEVINE",
//       "feature": "DASH",
//       "feature": "HIGH_DEFINITION",
//       "feature": "MP4",
//       "feature": "SUBTITLES",
//       "licenseServer": {
//         "server": 'com.widevine.alpha',
//         "url": 'https://cwip-shaka-proxy.appspot.com/no_auth'
//       },
//       ",
//     }, {
//       "name": 'Tears of Steel "PlayReady",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel-dash-playready.ism/.mpd',
//       "source": "UNIFIED_STREAMING",
//       "keySystem": "PLAYREADY",
//       "feature": "DASH",
//       "feature": "HIGH_DEFINITION",
//       "feature": "MP4",
//       "feature": "SUBTITLES",
//       "licenseServer": 'com.microsoft.playready',
//       'https://test.playready.microsoft.com/service/rightsmanager.asmx?PlayRight=1&UseSimpleNonPersistentLicense=1'
//       ",
//     }, {
//       "name": 'Tears of Steel "subtitles",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel-en.ism/.mpd',
//       "source": "UNIFIED_STREAMING",
//       "feature": "DASH",
//       "feature": "HIGH_DEFINITION",
//       "feature": "MP4",
//       "feature": "SUBTITLES",
//       "feature": "OFFLINE",
//     }, {
//       "name": 'Tears of Steel "Thumbnails",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//       "manifestUri": 'https://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel-tiled-thumbnails-timeline.ism/.mpd',
//       "source": "UNIFIED_STREAMING",
//       "feature": "DASH",
//       "feature": "HIGH_DEFINITION",
//       "feature": "MP4",
//       "feature": "SUBTITLES",
//       "feature": "OFFLINE",
//       "feature": "THUMBNAILS",
//       // End Unified Streaming assets }}}
//       // DASH-IF assets {{{
//       // Src: http://dashif.org/test-vectors/
//     }, {
//       "name": 'Big Buck Bunny "DASH-IF",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/big_buck_bunny.png',
//       "manifestUri": 'https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd',
//       "source": "DASH_IF",
//       "feature": "MP4",
//       "feature": "DASH",
//       "feature": "HIGH_DEFINITION",
//       "feature": "OFFLINE",
//     }, {
//       "name": 'Live sim "2s segments",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//       "manifestUri": 'https://livesim.dashif.org/livesim/utc_head/testpic_2s/Manifest.mpd',
//       "source": "DASH_IF",
//       "feature": "LIVE",
//       "feature": "MP4",
//       "feature": "DASH",
//     }, {
//       "name": 'Live sim SegmentTimeline w/ $Time$ "6s segments",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//       "manifestUri": 'https://livesim.dashif.org/livesim/segtimeline_1/utc_head/testpic_6s/Manifest.mpd',
//       "source": "DASH_IF",
//       "feature": "DASH",
//       "feature": "LIVE",
//       "feature": "MP4",
//     }, {
//       "name": 'Live sim SegmentTimeline w/ $Number$ "6s segments",',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//       "manifestUri": 'https://livesim.dashif.org/livesim/segtimelinenr_1/utc_head/testpic_6s/Manifest.mpd',
//       "source": "DASH_IF",
//       "feature": "DASH",
//       "feature": "LIVE",
//       "feature": "MP4",
//     }, {
//       "name": 'Live sim SegmentTimeline StartOver [-20s, +20s] (2s segments)"',
//       "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//       "manifestUri": 'https://livesim.dashif.org/livesim/segtimeline_1/startrel_-20/stoprel_20/timeoffset_0/testpic_2s/Manifest.mpd',
//       "source": "DASH_IF",
//       "feature": "DASH",
//       "feature": "MP4",
//     }, {
//       "name": 'Live sim StartOver SegTmpl Duration [-20s, +20s] (2s segments)',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//     "manifestUri": 'https://livesim.dashif.org/livesim/startrel_-20/stoprel_20/timeoffset_0/testpic_2s/Manifest.mpd',
//     "source": "DASH_IF",
//     "feature": "DASH",
//     "feature": "MP4",
//   },
//   {
//     "name": 'Live sim SegTmpl Duration "multi-period 60s",',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//     "manifestUri": 'https://livesim.dashif.org/livesim/utc_head/periods_60/testpic_2s/Manifest.mpd',
//     "source": "DASH_IF",
//     "feature": "DASH",
//     "feature": "LIVE",
//     "feature": "MP4",
//   }, {
//     "name": 'Live sim TTML Image Subtitles embedded "VoD",',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//     "manifestUri": 'https://livesim.dashif.org/dash/vod/testpic_2s/img_subs.mpd',
//     "source": "DASH_IF",
//     "feature": "DASH",
//     "feature": "SUBTITLES",
//     "feature": "MP4",
//   }, {
//     "name": 'Low Latency DASH Live',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//     "manifestUri": 'https://livesim.dashif.org/livesim-chunked/chunkdur_1/ato_7/testpic4_8s/Manifest300.mpd',
//     "source": "SHAKA",
//     "feature": "DASH",
//     "feature": "LIVE",
//     "feature": "MP4",
//   }, {
//     "name": 'DASH-IF CEA-608 VOD',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//     "manifestUri": 'https://livesim.dashif.org/dash/vod/testpic_2s/cea608.mpd',
//     "source": "DASH_IF",
//     "feature": "DASH",
//     "feature": "SUBTITLES",
//     "feature": "MP4",
//   }, {
//     "name": 'DASH-IF CEA-608 Live',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//     "manifestUri": 'https://livesim.dashif.org/livesim/testpic_2s/cea608.mpd',
//     "source": "DASH_IF",
//     "feature": "DASH",
//     "feature": "LIVE",
//     "feature": "SUBTITLES",
//     "feature": "MP4",
//   }, {
//     "name": 'Akamai Low Latency DASH Live',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//     "manifestUri": 'https://akamaibroadcasteruseast.akamaized.net/cmaf/live/657078/akasource/out.mpd',
//     "source": "DASH_IF",
//     "feature": "DASH",
//     "feature": "LIVE",
//     "feature": "MP4",
//   }, {
//     "name": 'DASH-IF THUMBNAILS - Single adaptation set,7 tiles at 10 x1, each thumb 320 x180',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//     "manifestUri": 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_with_tiled_thumbnails.mpd',
//     "source": "DASH_IF",
//     "feature": "DASH",
//     "feature": "ULTRA_HIGH_DEFINITION",
//     "feature": "MP4",
//     "feature": "OFFLINE",
//     "feature": "THUMBNAILS",
//   }, {
//     "name": 'DASH-IF THUMBNAILS - Single adaptation set, 4 tiles at 10 x1, each thumb 205 x115 ',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//     "manifestUri": 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_with_4_tiles_thumbnails.mpd',
//     "source": "DASH_IF",
//     "feature": "DASH",
//     "feature": "ULTRA_HIGH_DEFINITION",
//     "feature": "MP4",
//     "feature": "OFFLINE",
//     "feature": "THUMBNAILS",
//   }, {
//     "name": 'DASH-IF THUMBNAILS - Single adaptation set, 1 tile at 10 x20, each thumb 102 x58 ',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//     "manifestUri": 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_with_tiled_thumbnails_2.mpd',
//     "source": "DASH_IF",
//     "feature": "DASH",
//     "feature": "ULTRA_HIGH_DEFINITION",
//     "feature": "MP4",
//     "feature": "OFFLINE",
//     "feature": "THUMBNAILS",
//   }, {
//     "name": 'DASH-IF THUMBNAILS - Two adaptation sets with different thumb resolutions',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//     "manifestUri": 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_with_multiple_tiled_thumbnails.mpd',
//     "source": "DASH_IF",
//     "feature": "DASH",
//     "feature": "ULTRA_HIGH_DEFINITION",
//     "feature": "MP4",
//     "feature": "OFFLINE",
//     "feature": "THUMBNAILS",
//   }, {
//     "name": 'DASH-IF THUMBNAILS - Live stream, Single adaptation set, 1 x1 tiles "livesim"',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dash_if_test_pattern.png',
//     "manifestUri": 'https://livesim.dashif.org/livesim/testpic_2s/Manifest_thumbs.mpd',
//     "source": "DASH_IF",
//     "feature": "DASH",
//     "feature": "ULTRA_HIGH_DEFINITION",
//     "feature": "MP4",
//     "feature": "LIVE",
//     "feature": "THUMBNAILS",
//     // End DASH-IF Assets }}}
//     // bitcodin assets {{{
//     // Src: http://www.dash-player.com/demo/streaming-server-and-encoder-support/
//     // Src: https://bitmovin.com/mpeg-dash-hls-examples-sample-streams/
//   }, {
//     "name": 'Art of Motion "DASH",',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/art_of_motion.png',
//     "manifestUri": 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
//     "source": "BITCODIN",
//     "feature": "DASH",
//     "feature": "HIGH_DEFINITION",
//     "feature": "MP4",
//     "feature": "OFFLINE",
//   }, {
//     "name": 'Art of Motion "HLS, TS",',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/art_of_motion.png',
//     "manifestUri": 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
//     "source": "BITCODIN",
//     "feature": "HIGH_DEFINITION",
//     "feature": "HLS",
//     "feature": "MP2TS",
//     "feature": "OFFLINE",
//   }, {
//     "name": 'Sintel (HLS, TS, 4k)',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/sintel.png',
//     "manifestUri": 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
//     "source": "BITCODIN",
//     // Disabled because the audio playlist ends about 9 seconds early somehow.
//     "disabled":  true,
//     "feature": "HIGH_DEFINITION",
//     "feature": "HLS",
//     "feature": "MP2TS",
//     "feature": "OFFLINE",
//     // End bitcodin assets }}}
//     // MetaCDN assets {{{
//   }, {
//     "name": 'Car Ride "DASH, VOD, 180 Degrees',
//     "iconUri": 'https://lab.streamshark.io:10433/streams/balmain_360/.png?scale=300:210',
//     "manifestUri": 'https://lab.streamshark.io:10433/streams/balmain_360/Feature.DASH/.mpd',
//     "source": "METACDN",
//     "feature": "DASH",
//     "feature": "HIGH_DEFINITION",
//     "feature": "MP4",
//     "feature": "VOD",
//   }, {
//     "name": 'Car Ride "HLS, VOD, 180 Degrees',
//     "iconUri": 'https://lab.streamshark.io:10433/streams/balmain_360/.png?scale=300:210',
//     "manifestUri": 'https://lab.streamshark.io:10433/streams/balmain_360/Feature.HLS/.m3u8',
//     "source": "METACDN",
//     "feature": "HIGH_DEFINITION",
//     "feature": "HLS",
//     "feature": "MP2TS",
//     "feature": "VOD",
//   }, {
//     "name": 'Queensland, Australia Landscape "DASH",',
//     "iconUri": 'https://lab.streamshark.io:10433/streams/sharkahouse/.png?scale=300:210',
//     "manifestUri": 'https://lab.streamshark.io:10433/streams/sharkahouse/Feature.DASH/.mpd',
//     "source": "METACDN",
//     "feature": "DASH",
//     "feature": "HIGH_DEFINITION",
//     "feature": "MP4",
//     "feature": "VOD",
//   }, {
//     "name": 'Queensland, Australia Landscape "HLS",',
//     "iconUri": 'https://lab.streamshark.io:10433/streams/sharkahouse/.png?scale=300:210',
//     "manifestUri": 'https://lab.streamshark.io:10433/streams/sharkahouse/Feature.HLS/.m3u8',
//     "source": "METACDN",
//     "feature": "HIGH_DEFINITION",
//     "feature": "HLS",
//     "feature": "MP2TS",
//     "feature": "VOD",
//     // End MetaCDN assets }}}
//     // Nimble Streamer assets {{{
//     // Src: https://wmspanel.com/nimble/demo
//   }, {
//     "name": 'Big Buck Bunny "Nimble, DASH",',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/big_buck_bunny.png',
//     "manifestUri": 'https://cf-sf-video.wmspanel.com/local/raw/BigBuckBunny_320x180.mp4/manifest.mpd',
//     "source": "NIMBLE_STREAMER",
//     "feature": "DASH",
//     "feature": "MP4",
//     "feature": "HIGH_DEFINITION",
//     "feature": "OFFLINE",

//   }, {
//     "name": 'Big Buck Bunny "Nimble, HLS",',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/big_buck_bunny.png',
//     "manifestUri": 'https://cf-sf-video.wmspanel.com/local/raw/BigBuckBunny_320x180.mp4/playlist.m3u8',
//     "source": "NIMBLE_STREAMER",
//     "feature": "HLS",
//     "feature": "MP2TS",
//     "feature": "HIGH_DEFINITION",
//     "feature": "OFFLINE",
//     // End Nimble Streamer assets }}}
//     // Azure Media Services assets {{{
//     // Src: http://amp.azure.net/libs/amp/latest/docs/samples.html
//   }, {
//     "name": 'Azure Trailer',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/azure.png',
//     "manifestUri": 'https://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest"format=mpd-time-csf",',
//     "source": "AZURE_MEDIA_SERVICES",
//     "feature": "DASH",
//     "feature": "MP4",
//     "feature": "HIGH_DEFINITION",
//     "feature": "OFFLINE",
//   }, {
//     "name": 'Big Buck Bunny "Azure",',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/big_buck_bunny.png',
//     "manifestUri": 'https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest"format=mpd-time-csf",',
//     "source": "AZURE_MEDIA_SERVICES",
//     "keySystem": "PLAYREADY",
//     "keySystem": "WIDEVINE",
//     "feature": "DASH",
//     "feature": "HIGH_DEFINITION",
//     "feature": "MP4",
//     "feature": "OFFLINE",
//     "licenseServer": 'com.widevine.alpha',
//     'https://amssamples.keydelivery.mediaservices.windows.net/Widevine/?KID=1ab45440-532c-4399-94dc-5c5ad9584bac'
//     ",
//     "licenseServer": 'com.microsoft.playready',
//     'https://amssamples.keydelivery.mediaservices.windows.net/PlayReady/'
//     ",
//   }, {
//     "name": 'Tears of Steel "external text",',
//     "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/tears_of_steel.png',
//     "manifestUri": 'https://ams-samplescdn.streaming.mediaservices.windows.net/11196e3d-2f40-4835-9a4d-fc52751b0323/TearsOfSteel_WAMEH264SmoothStreaming720p.ism/manifest"format=mpd-time-csf",',
//     "source": "AZURE_MEDIA_SERVICES",
//     "feature": "DASH",
//     "feature": "MP4",
//     "feature": "SUBTITLES",
//     "feature": "OFFLINE",
//     .addExtraText "{
//     uri: 'https://ams-samplescdn.streaming.mediaservices.windows.net/11196e3d-2f40-4835-9a4d-fc52751b0323/TOS-en.vtt',
//     language: 'en',
//     kind: 'subtitle',
//     mime: 'text/vtt',
//   }
// ",.addExtraText" {
//   uri: 'https://ams-samplescdn.streaming.mediaservices.windows.net/11196e3d-2f40-4835-9a4d-fc52751b0323/TOS-es.vtt',
//   language: 'es',
//   kind: 'subtitle',
//   mime: 'text/vtt',
// }
// ",.addExtraText" {
//   uri: 'https://ams-samplescdn.streaming.mediaservices.windows.net/11196e3d-2f40-4835-9a4d-fc52751b0323/TOS-fr.vtt',
//   language: 'fr',
//   kind: 'subtitle',
//   mime: 'text/vtt',
// }
// ",
// // End Azure Media Services assets }}}
// // GPAC assets {{{
// // Src: https://gpac.wp.mines-telecom.fr/2012/02/23/dash-sequences/
// // NOTE: The assets here using the "live profile" are not actually
// // "live streams".The content is still static, as is the timeline.
// // TODO: Get actual icon?
// }, {
//   "name": 'live profile',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/sintel.png',
//   "manifestUri": 'https://download.tsi.telecom-paristech.fr/gpac/DASH_CONFORMANCE/TelecomParisTech/mp4-live/mp4-live-mpd-AV-BS.mpd',
//   "source": "GPAC",
//   // NOTE: Multiple SPS/PPS in init segment, no sample duration
//   // NOTE: Decoder errors on Mac
//   // https://github.com/gpac/gpac/issues/600
//   // https://bugs.webkit.org/show_bug.cgi?id=160459
//   "disabled":  true,
//   "feature": "DASH",
//   "feature": "MP4",
//   ,
// }, {
//   "name": 'live profile with five periods',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/gpac_test_pattern.png',
//   "manifestUri": 'https://download.tsi.telecom-paristech.fr/gpac/DASH_CONFORMANCE/TelecomParisTech/mp4-live-periods/mp4-live-periods-mpd.mpd',
//   "source": "GPAC",
//   "feature": "DASH",
//   "feature": "MP4",
//   "feature": "HIGH_DEFINITION",
//   "feature": "OFFLINE",
//   ,
// }, {
//   "name": 'main profile, single file',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/gpac_test_pattern.png',
//   "manifestUri": 'https://download.tsi.telecom-paristech.fr/gpac/DASH_CONFORMANCE/TelecomParisTech/mp4-main-single/mp4-main-single-mpd-AV-NBS.mpd',
//   "source": "GPAC",
//   "feature": "DASH",
//   "feature": "MP4",
//   "feature": "HIGH_DEFINITION",
//   "feature": "OFFLINE",
//   ,
// }, {
//   "name": 'main profile, multiple files',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/gpac_test_pattern.png',
//   "manifestUri": 'https://download.tsi.telecom-paristech.fr/gpac/DASH_CONFORMANCE/TelecomParisTech/mp4-main-multi/mp4-main-multi-mpd-AV-BS.mpd',
//   "source": "GPAC",
//   // NOTE: Multiple SPS/PPS in init segment, no sample duration
//   // NOTE: Decoder errors on Mac
//   // https://github.com/gpac/gpac/issues/600
//   // https://bugs.webkit.org/show_bug.cgi?id=160459
//   "disabled":  true,
//   "feature": "DASH",
//   "feature": "MP4",
//   ,
// }, {
//   "name": 'onDemand profile',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/gpac_test_pattern.png',
//   "manifestUri": 'https://download.tsi.telecom-paristech.fr/gpac/DASH_CONFORMANCE/TelecomParisTech/mp4-onDemand/mp4-onDemand-mpd-AV.mpd',
//   "source": "GPAC",
//   "feature": "DASH",
//   "feature": "MP4",
//   "feature": "HIGH_DEFINITION",
//   "feature": "OFFLINE",
//   ,
// }, {
//   "name": 'main profile, open GOP',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/gpac_test_pattern.png',
//   "manifestUri": 'https://download.tsi.telecom-paristech.fr/gpac/DASH_CONFORMANCE/TelecomParisTech/mp4-main-ogop/mp4-main-ogop-mpd-AV-BS.mpd',
//   "source": "GPAC",
//   // NOTE: Segments do not start with keyframes
//   // NOTE: Decoder errors on Safari
//   // https://bugs.webkit.org/show_bug.cgi?id=160460
//   "disabled":  true,
//   "feature": "DASH",
//   "feature": "MP4",
//   ,
// }, {
//   "name": 'full profile, gradual decoding refresh',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/gpac_test_pattern.png',
//   "manifestUri": 'https://download.tsi.telecom-paristech.fr/gpac/DASH_CONFORMANCE/TelecomParisTech/mp4-full-gdr/mp4-full-gdr-mpd-AV-BS.mpd',
//   "source": "GPAC",
//   // NOTE: segments do not start with keyframes
//   // NOTE: Decoder errors on Safari
//   // https://bugs.webkit.org/show_bug.cgi?id=160460
//   "disabled":  true,
//   "feature": "DASH",
//   "feature": "MP4",
//   ,
//   // End GPAC assets }}}
//   // Verizon Digital Media Services "VDMS", assets {{{
//   // Reliable Playready playback requires Edge 16+
//   // The playenabler and sl url parameters allow for playback in VMs
// }, {
//   "name": 'Multi DRM - 8 Byte IV',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/azure.png',
//   "manifestUri": 'https://content.uplynk.com/847859273a4b4a81959d8fea181672a4.mpd?pr.version=2&pr.playenabler=B621D91F-EDCC-4035-8D4B-DC71760D43E9&pr.securitylevel=150',
//   "source": "UPLYNK",
//   "keySystem": "PLAYREADY",
//   "keySystem": "WIDEVINE",
//   "feature": "DASH",
//   "feature": "MP4",
//   "feature": "HIGH_DEFINITION",
//   "licenseServer": 'com.microsoft.playready',
//   'https://content.uplynk.com/pr'
//   ",
//   "licenseServer": 'com.widevine.alpha',
//   'https://content.uplynk.com/wv'
//   ",
//   .setRequestFilter "shakaAssets.UplynkRequestFilter",
//   .setResponseFilter "shakaAssets.UplynkResponseFilter",
//   ,
//   // Reliable Playready playback requires Edge 16+
//   // The playenabler and sl url parameters allow for playback in VMs
// }, {
//   "name": 'Multi DRM - MultiPeriod - 8 Byte IV',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/sintel.png',
//   "manifestUri": 'https://content.uplynk.com/054225d59be2454fabdca3e96912d847.mpd?ad=cleardash&pr.version=2&pr.playenabler=B621D91F-EDCC-4035-8D4B-DC71760D43E9&pr.securitylevel=150',
//   "source": "UPLYNK",
//   "keySystem": "PLAYREADY",
//   "keySystem": "WIDEVINE",
//   "feature": "DASH",
//   "feature": "MP4",
//   "feature": "SUBTITLES",
//   "feature": "HIGH_DEFINITION",
//   "licenseServer": 'com.microsoft.playready',
//   'https://content.uplynk.com/pr'
//   ",
//   "licenseServer": 'com.widevine.alpha',
//   'https://content.uplynk.com/wv'
//   ",
//   .setRequestFilter "shakaAssets.UplynkRequestFilter",
//   .setResponseFilter "shakaAssets.UplynkResponseFilter",
//   ,
// }, {
//   "name": 'Widevine - 16 Byte IV',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/big_buck_bunny.png',
//   "manifestUri": 'https://content.uplynk.com/224ac8717e714b68831997ab6cea4015.mpd',
//   "source": "UPLYNK",
//   "keySystem": "WIDEVINE",
//   "feature": "DASH",
//   "feature": "MP4",
//   "feature": "HIGH_DEFINITION",
//   "licenseServer": 'com.widevine.alpha',
//   'https://content.uplynk.com/wv'
//   ",
//   .setRequestFilter "shakaAssets.UplynkRequestFilter",
//   .setResponseFilter "shakaAssets.UplynkResponseFilter",
//   ,
// }, {
//   "name": 'Widevine - 16 Byte IV - "mix of encrypted and unencrypted periods",',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/sintel.png',
//   "manifestUri": 'https://content.uplynk.com/1eb40d8e64234f5c9879db7045c3d48c.mpd?ad=cleardash&rays=cdefg',
//   "source": "UPLYNK",
//   "keySystem": "WIDEVINE",
//   "feature": "DASH",
//   "feature": "MP4",
//   "feature": "MULTIPLE_LANGUAGES",
//   "feature": "HIGH_DEFINITION",
//   "licenseServer": 'com.widevine.alpha',
//   'https://content.uplynk.com/wv'
//   ",
//   .setRequestFilter "shakaAssets.UplynkRequestFilter",
//   .setResponseFilter "shakaAssets.UplynkResponseFilter",
//   ,
//   // End Verizon Digital Media Services "VDMS", assets }}}
//   // Apple assets {{{
//   // Src: https://developer.apple.com/streaming/examples/
// }, {
//   "name": 'Apple Advanced HLS Stream "fMP4",',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/apple_test_pattern.png',
//   "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/apple-advanced-stream-fmp4/master.m3u8',
//   "source": "APPLE",
//   "feature": "HLS",
//   "feature": "MP4",
//   "feature": "CAPTIONS",
//   "feature": "OFFLINE",
//   ,
// }, {
//   "name": 'Apple Advanced HLS Stream "TS",',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/apple_test_pattern.png',
//   "manifestUri": 'https://storage.googleapis.com/shaka-demo-assets/apple-advanced-stream-ts/master.m3u8',
//   "source": "APPLE",
//   "feature": "HLS",
//   "feature": "MP2TS",
//   "feature": "CAPTIONS",
//   "feature": "OFFLINE",
//   ,
// }, {
//   "name": 'Low Latency HLS Live',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/apple_test_pattern.png',
//   "manifestUri": 'https://ll-hls-test.apple.com/cmaf/master.m3u8',
//   "source": "APPLE",
//   "feature": "HLS",
//   "feature": "LIVE",
//   "feature": "MP4",
//   ,
//   // }}}
//   // IRT assets {{{
//   // Src: http://subtitling.irt.de/cmaf/#urls
//   // Note: According to the website, these assets may not be available 24/7.
// }, {
//   "name": 'Bayerischer Rundfunk Recorded Loop "DASH",',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/bayerischer_rundfunk.png',
//   "manifestUri": 'https://irtdashreference-i.akamaihd.net/dash/live/901161/keepixo1/manifestBR2.mpd',
//   "source": "IRT",
//   "feature": "DASH",
//   "feature": "MP4",
//   "feature": "HIGH_DEFINITION",
//   "feature": "LIVE",
//   ,
// }, {
//   "name": 'Bayerischer Rundfunk Recorded Loop "HLS",',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/bayerischer_rundfunk.png',
//   "manifestUri": 'https://irtdashreference-i.akamaihd.net/dash/live/901161/keepixo1/playlistBR2.m3u8',
//   "source": "IRT",
//   "feature": "HLS",
//   "feature": "MP4",
//   "feature": "HIGH_DEFINITION",
//   "feature": "LIVE",
//   ,
//   // }}}
//   // MICROSOFT assets {{{
//   // Src: http://subtitling.irt.de/cmaf/#urls
//   // Note: According to the website, these assets may not be available 24/7.
// }, {
//   "name": 'Big Buck Bunny: the Dark Truths of a Video Dev Cartoon "HLS - PlayReady",',
//   "iconUri": 'https://storage.googleapis.com/shaka-asset-icons/dark_truth.png',
//   "manifestUri": 'https://test.playready.microsoft.com/media/dash/APPLEENC_CBCS_BBB_1080p/1080p_alternate.m3u8',
//   "source": "MICROSOFT",
//   "keySystem": "PLAYREADY",
//   "feature": "HLS",
//   "feature": "MP4",
//   "feature": "HIGH_DEFINITION",
//   "licenseServer": 'com.microsoft.playready',
//   'http://test.playready.microsoft.com/service/rightsmanager.asmx?cfg="persist:false,ck:W31bfVt9W31bfVt9W31bfQ==,ckt:aescbc",'
//   ",