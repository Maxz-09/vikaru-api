function displayApiInfo() {
    var select = document.getElementById("apiSelect");
    var selectedOption = select.options[select.selectedIndex].value;
    var apiInfoDiv = document.getElementById("apiInfo");
    var apiLinkBtn = document.getElementById("apiLinkBtnVisit");
    apiInfoDiv.innerHTML = "";

    switch (selectedOption) {
        // Ping
        case "ping":
            apiInfoDiv.innerHTML =
            "Check API status and speed";
            apiLiBtn.disabled = false;
            
        // AI
        case "chatgpt":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from ChatGPT for free.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %response%.<p></p><br>( API ) - Optional, to get a ChatGPT response from the selected API type. Available types: nyxs_gpt4, nyxs_gpt, nyxs_turbo, and vikaru.<p></p><br>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages.<p></p></br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;
            
        case "gpt":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from ChatGPT for free.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %response%.<p></p><br>( API ) - Optional, to get a ChatGPT response from the selected API type. Available types: nyxs_gpt4, nyxs_gpt, nyxs_turbo, and vikaru.<p></p><br>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages.<p></p></br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;
            
        case "blackbox":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from BlackBox for free.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %response%.<p></p><br>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages.<p></p></br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;
        case "gemini":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from Gemini for free.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %response%.<p></p><br>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages.<p></p></br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;
        case "metallama":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from Meta Llama for free.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %response%.<p></p><br>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages.<p></p></br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;
        case "mistral":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from Mistral for free.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %response%.<p></p><br>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages.<p></p></br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;
        case "simsimi":
            apiInfoDiv.innerHTML =
            "<p>API to get a response from Simsimi.</p>" +
            "<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %response%.<p></p><br>( LANGUAGE ) - Must, available languages: vi, en, ph, zh, ch, ru, id, ko, ar, fr, jp, de, etc.<p></p><br>( APIKEY ) - Optional, if you have the Simsimi API key, you can use it, if you dont have it, its okay, everything will work normally.<p></p></br>( EXPERIMENTAL ) - Optional, for experimental use. Enter 'true' to use it.</p>";
            apiLinkBtn.disabled = false;
            break;

        // Mini Games
        case "susunkata":
            apiInfoDiv.innerHTML = "<p>API to get text Susun Kata randomly.</p>" + "<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %text%.</p>";
            apiLinkBtn.disabled = true;
            break;
        case "tebakkata":
            apiInfoDiv.innerHTML = "<p>API to get text Tebak Kata randomly.</p>" + "<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %text%.</p>";
            apiLinkBtn.disabled = true;
            break;
        case "tebaklirik":
            apiInfoDiv.innerHTML = "<p>API to get text Tebak Lirik randomly.</p>" + "<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %text%.</p>";
            apiLinkBtn.disabled = true;
            break;

        // Random Text
        case "truth":
            apiInfoDiv.innerHTML = "<p>API to get text Truth randomly.</p>" + "<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %text%.</p>";
            apiLinkBtn.disabled = false;
            break;
        case "dare":
            apiInfoDiv.innerHTML = "<p>API to get text Dare randomly.</p>" + "<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %text%.</p>";
            apiLinkBtn.disabled = false;
            break;
        case "bucin":
            apiInfoDiv.innerHTML = "<p>API to get text Bucin randomly.</p>" + "<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %text%.</p>";
            apiLinkBtn.disabled = false;
            break;
        case "hacker":
            apiInfoDiv.innerHTML = "<p>API to get text Hacker Bucin randomly.</p>" + "<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %text%.</p>";
            apiLinkBtn.disabled = false;
            break;
        case "pantun":
            apiInfoDiv.innerHTML = "<p>API to get text Pantun randomly.</p>" + "<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %text%.</p>";
            apiLinkBtn.disabled = false;
            break;
        case "quotes":
            apiInfoDiv.innerHTML = "<p>API to get text Quotes randomly.</p>" + "<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %text%.</p>";
            apiLinkBtn.disabled = false;
            break;

        // Islamic
        case "hijriah":
            apiInfoDiv.innerHTML = "<p>API to get text Hijriah Result.</p>" + "<p><strong>Headers:</strong><br>Not using headers!</p>";
            apiLinkBtn.disabled = false;
            break;
        case "jadwalsholat":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from Jadwal Sholat.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages<p></p>.</br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;

        // Search
        case "chordgitar":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from Chord Gitar for result.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %response%.<p></p><br>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages.<p></p></br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = true;
            break;
        case "lyricsearch":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from Lyrics Search for result.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %response%.<p></p><br>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages.<p></p></br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;

        // Stalking
        case "Instagram":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from Instagram for stalk.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages<p></p>.</br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = true;
            break;

        case "youtube":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from YouTube for stalk.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %response%.<p></p><br>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages.<p></p></br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = true;
            break;

        // Tools
        case "ip-lookup":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from IP lookup for location.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages<p></p>.</br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;
        case "shortlink":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from short link for result.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %response%.<p></p><br>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages.<p></p></br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = true;
            break;
        case "translate":
            apiInfoDiv.innerHTML =
            "<p>API to get responses from Translate for result.</p>" +
            '<p><strong>Headers:</strong><br><p></p>( REPLIES ) - Optional, to send a custom replies message. Available variables: %response%.<p></p><br>( EXPERIMENTAL ) - Optional, for experimental use. Enter "true" to use it.<p></p></br>( REGEX ) - Must if use EXPERIMENTAL, to combine REGEX and messages.<p></p></br>( ARG1 ) - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;

        // Default
        default:
            apiInfoDiv.innerHTML = "<p>Select an API to see more information.</p>";
            apiLinkBtn.disabled = true;
            break;
    }
}

function visitApi() {
    var select = document.getElementById("apiSelect");
    var selectedOption = select.options[select.selectedIndex].value;

    switch (selectedOption) {
        // Ping
        case "ping":
            window.open("api/ping.php", "_blank");
            break;
            
        // AI
        case "chatgpt":
            window.open("api/ai/chatgpt.php", "_blank");
            break;
        
        case "gpt":
            window.open("api/ai/gpt.php", "_blank");
            break;
            
        case "blackbox":
            window.open("api/ai/blackbox.php", "_blank");
            break;
        case "gemini":
            window.open("api/ai/gemini.php", "_blank");
            break;
        case "metallama":
            window.open("api/ai/metallama.php", "_blank");
            break;
        case "mistral":
            window.open("api/ai/mistral.php", "_blank");
            break;
        case "simsimi":
            window.open("api/ai/simsimi.php", "_blank");
            break;

        // Mini Games
        case "susunkata":
            window.open("api/games/susunkata.php", "_blank");
            break;
        case "tebakkata":
            window.open("api/games/tebakkata.php", "_blank");
            break;
        case "tebaklirik":
            window.open("api/games/tebaklirik.php", "_blank");
            break;

        // Random Text
        case "truth":
            window.open("api/random-text/truth.php", "_blank");
            break;
        case "dare":
            window.open("api/random-text/dare.php", "_blank");
            break;
        case "bucin":
            window.open("api/random-text/bucin.php", "_blank");
            break;
        case "hacker":
            window.open("api/random-text/hacker.php", "_blank");
            break;
        case "pantun":
            window.open("api/random-text/pantun.php", "_blank");
            break;
        case "quotes":
            window.open("api/random-text/quotes.php", "_blank");
            break;

        // Islamic
        case "hijriah":
            window.open("api/islamic/hijriah.php", "_blank");
            break;
        case "jadwalsholat":
            window.open("api/islamic/jadwalsholat.php", "_blank");
            break;

        // Search
        case "chordgitar":
            window.open("api/search/chordgitar.php", "_blank");
            break;
        case "lyricsearch":
            window.open("api/search/lyricsearch.php", "_blank");
            break;

        // Stalking
        case "Instagram":
            window.open("api/stalk/Instagram.php", "_blank");
            break;
        case "youtube":
            window.open("api/stalk/youtube.php", "_blank");
            break;

        // Tools
        case "ip-lookup":
            window.open("api/tools/ip-lookup.php", "_blank");
            break;
        case "shortlink":
            window.open("api/tools/shortlink.php", "_blank");
            break;
        case "translate":
            window.open("api/tools/translate.php", "_blank");
            break;

        // Default
        default:
            break;
    }
}
function visitOther(type) {
    let url;

    switch (type) {
        case "help": // help
            url = "https://wa.me/6289508899033?text=Hello,%20I%20need%20your%20help%20on%20how%20to%20use%20the%20Vikaru%20API";
            break;
        case "vikaru-bot": // Vikaru-Bot
            url = "https://github.com/Maxz-09/Vikaru-Bot";
            break;

        // Default
        default:
            return;
        }

        window.open(url, "_blank");
    }

function visitCredits(type) {
    let url;

    switch (type) {
        case "anargya": // Anargya
            url = "https://anargya.my.id";
            break;
        case "itsreimau": // Itsreimau
             url = "https://itsreimau.is-a.dev/";
             break;
        case "api-gabut": // API Gabut
             url = "https://api-gabut.bohr.io/";
             break;
        case "bohr-io": // Bohr IO
             url = "https://bohr.io/";
             break;
        case "AutoResponderAI": // Komunitas AutoResponder.ai ID
             url = "https://t.me/AutoResponderAI";
             break;
        case "ngodingaja": // Milfu Rest APIs
             url = "https://api.ngodingaja.my.id/";
             break;
        case "nyxs": // Nyxs Rest-Api
             url = "https://api.nyxs.pw/";
             break;
        case "sandipbaruwal": // OtinXSandip API
             url = "https://sandipbaruwal.onrender.com/";
             break;

        // Default
        default:
            return;
        }

        window.open(url, "_blank");
        }

function visitDonate(type) {
    let url;

    switch (type) {
        case "saweria":
            url = "https://saweria.co/maxtream09";
            break;

        // Default
        default:
            return;
        }

        window.open(url, "_blank");
    }

// Particles effect
const container = document.querySelector('.container');

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // Posisi awal partikel secara acak
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.top = '-10px';

  // Ukuran partikel secara acak
  particle.style.width = Math.random() * 4 + 'px';
  particle.style.height = particle.style.width;

  container.appendChild(particle);

  // Hapus partikel setelah animasi selesai
  setTimeout(() => {
    particle.remove();
  }, 2000);
}

// Buat partikel baru setiap interval waktu tertentu
setInterval(createParticle, 250);

// Posisi particle menyesuaikan layat saat di scrolling
window.addEventListener('scroll', function() {
  let scrolled = window.pageYOffset;

  if (scrolled > 100) {
    // Tambahkan kelas atau ubah style elemen saat sudah scroll 100px
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});