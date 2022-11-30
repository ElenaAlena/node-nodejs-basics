const parseEnv = () => {
    const env = process.env;
    const filtered = Object.keys(env).filter(key => key.startsWith("RSS_"));
    filtered.forEach(item=>{
        console.log(`${item}=${process.env[item]}`)
    })
    ;
};

parseEnv();