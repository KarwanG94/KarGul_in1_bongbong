# KarGul_in1_bongbong - Teori delen.

## Hur används HTTP-protokollet när du surfar in på en websida? Beskriv vilken metod, path, URI, response code och body som skickas in och svarar.

### Svar:
När du skriver en URL i en webbläsare (eller klickar på en länk) sänder webbläsaren ut en HTTP GET (method) request till servern. Den viktiga informationen som skickas till servern är URL path &
querystring. Kombinationen av method, path och querystring är vad din app
använder för att avgöra responden.

## Beskriv HTTP-protokollets vanligaste metoder och vad de gör.

### Svar:
 Vanligaste HTTP metoder är:

#### GET 
Begär en representation av den angivna resursen / Hämtar data

#### POST
begär att servern accepterar den enhet som är bifogad i begäran som en ny underordnad av webbresursen identifierad av URI. / Med POST kan du skapa t.ex. en ny användare

#### PUT
begär att den slutna enheten lagras under den medföljande URI. Om URI hänvisar till en redan befintlig resurs, ändras den; om URI inte pekar på en befintlig resurs kan servern skapa resursen med den URI. / PUT metoden skapar en specifierad resurs t.ex. id för en användare eller titel

#### PATCH 
PATCH-metoden tillämpar partiella ändringar på en resurs. / PATCH uppdaterar specefika resurser

#### DELETE
raderar den angivna resursen.



## "http://localhost:3000/users?username=something" är en URI, beskriv vilka delar den består av och vad de kallas.

### Svar:
<b>URI --> Uniform Resource Identifier</b>

Består av:

Protocol - http

Domain - localhost

Port - :3000

Path - /users?username=something || om path har "?" så kallas det för <b>Query Strings</b>



## På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.

### Svar:

Genom Query, Path, och Body
Exempel:
```
curl -H "Content-Type:application/json" "localhost:3001/users?keyWithoutValue&keyWithValue=value" -H "some: header" | jq

curl -X DELETE 'http://localhost:3001/locations?id=3'
```