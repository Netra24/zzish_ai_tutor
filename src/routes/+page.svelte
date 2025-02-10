<script>
    let userInput = "";
    let response = "";
    let currInput = "";

    async function askTutor() {
        response = "";
        let body = userInput;
        currInput = "You: " + userInput;
        userInput = "";

        const res = await fetch("/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ body })
        });

        const data = await res.json();
        console.log(data);
        response = data.reply;
    }
</script>

<main>
    <div class="main-container">
    <h1 class="text-2xl font-bold">AI French Language Tutor (Powered by Gemini)</h1>

    <div class="response">
        {#if currInput}
            <div class="user">
                <p>{currInput}</p><br>
            </div>
        {/if}
        
        {#if response}
            <div class="ai">
                <p>{response}</p>
            </div>
        {/if}
    </div>

    <div class = "input-container">
        <textarea bind:value={userInput} placeholder="Ask me anything..."></textarea>
        <button on:click={askTutor}>Ask</button>
    </div>
    </div>
    
</main>

<style>
    main {
        background-image: url('../bg.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    
    .main-container {
        max-width: 800px;
        height: 500px;
        margin: auto;
        border-left: 2px solid black;
        border-right: 2px solid black;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    h1 {
        text-align: center;
        padding-top: 10px;
        padding-bottom: 20px;
    }

    .input-container {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 40px;
    }

    textarea {
        width: 600px;
        min-height: 20px;
        line-height: 20px;
        border-radius: 25px;
        padding-left: 10px;
    }

    button {
        height: 45px;
        width: 80px;
        border-radius: 25px;
    }

    button:hover {
        background-color: lightsteelblue;
    }

    .response {
        height: 300px;
        margin-left: 40px;
        margin-right: 40px;
        overflow-y: auto;
    }

    .user {
        display: flex;
        align-items: center;
        margin-left: 40px;
        margin-right: 40px;
        font-weight: bold;
        border-radius: 25px;
        padding: 5px;
        /* border: 1px solid gray; */
        background-color: white;
    }

    .ai {
        display: flex;
        align-items: center;
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 20px;
        text-align: justify;
        border-radius: 25px;
        padding: 10px;
        background-color: lightsteelblue;
    }
</style>
