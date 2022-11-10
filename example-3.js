
setTimeout( //This timeout goes into the queue first
    () => {
        setTimeout( //This timeout goes into to queue after since it's contained in the callback of the first
            () => {
                console.log('Inner Set Timeout')
            },
            0
        )
        console.log('Outer Set Timeout')
    },
    3000
)

console.log('Yo, I am here!')