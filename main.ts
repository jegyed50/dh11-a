let A = 0
basic.forever(function () {
    A += 1
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    true,
    true
    )
    basic.pause(2000)
    if (dht11_dht22.sensorrResponding()) {
        basic.showString("" + (dht11_dht22.readData(dataType.humidity)))
        if (dht11_dht22.readDataSuccessful()) {
            basic.showString("" + (dht11_dht22.readData(dataType.humidity)))
        }
    }
    serial.writeValue("A", A)
})
