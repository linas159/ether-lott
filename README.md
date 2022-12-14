# ether-lott

![image](https://user-images.githubusercontent.com/93277316/207666291-1fd1236e-6a1e-4249-83f3-4a269a408826.png)


## Programa
Sukurtas puslapis, skirtas žaisti loteriją su savo turima ethereum valiuta panaudojant Web3 technologijas.

## Programos paleidimas
- Git clone https://github.com/linas159/ether-lott.git
- Atsidaryti failą index.html (Front-End dalis)
- Nusikopijuoti kontrakto kodą iš ./contracts/lottery.sol ir panaudojant REMIX IDE dislokuoti
- Pasileisti Ganache įrankį bei pasirinkti REMIX IDE provaiderį - Ganache provider
- Nusikopijuoti kontrakto adresą iš REMIX IDE bei jį įkelti į ./script.js failą
- Tas adresas su kuriuo buvo dislokuota, tik jis galės išrinkti laimėtoją
- Sėkmės loterijoje.

## Naudoti įrankiai:
- HTML
- CSS
- JavaScript
- Solidity
- Ganache
- Remix IDE

## Loterijos aprašymas
- Išmanioje sutartyje gali dalyvauti daug dalyvių, tačiau visados turi būti bent du dalyviai, t.y. sutarties sukūrėjęs (dislokuotojas) - owner bei paprastas dalyvis (lošejas).
- Dalyviai taip pat ir sutarties dislokuotojas privalo save indentifikuoti, t.y prisijungti naudojantis MetaMask
- Dalyviai turi galimybę pežiūrėti esamą prizą ir savaime aišku patys prisijungti prie loterijos susimokėjus 1 ETH
- Tik savininkas atėjus laikui gali išrinkti laimėtoją ir pervesti piniginį prizą į žaidėjo virtualę piniginę.

## Įvykdytos transakcijos (Ganache)
![image](https://user-images.githubusercontent.com/93277316/207669208-24bceb45-8c56-4476-b3ab-45e28d0be046.png)


## Ganache išmaniosios sutarties vykdymo "logai"
![image](https://user-images.githubusercontent.com/93277316/207669771-2d0ff14f-4628-40ed-a87d-bb98aa229905.png)
