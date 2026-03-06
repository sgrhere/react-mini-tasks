# Digital clock
Here, the current time will be displayed.

## Working
* `new Date().toLocaleTimeString()` - to retrieve current time in hr/min/sec format
* Now, we need to update the time every second so, using useEffect and setInterval to make certain changes is given amount of time (every second in our case).
    ```
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
    },[])
    ```
