---
razza: Aberrazione media
classe: Mind flayer
sfida: "7"
pf: "71"
ca: "15"
for: "11"
des: "12"
cos: "12"
int: "19"
sag: "17"
car: "17"
allineamento: LM
vel: 9m(6 c)
init: "1"
pagina: 226 (MM)
---
# `= this.file.name` 
 `$= dv.current().pagina? '##### pag.'+dv.current().pagina : ''`
*`= this.razza`* **`= this.allineamento`** 
*`= this.classe`*
*(GS `=this.sfida`)*

--- start-multi-column: StatsRegion

```column-settings  
number of columns: 2  
largest column: left
Border: off
Shadow: off
```

> [!statlist]
> | | |
> |:---|:---:|
> | Punti ferita | `= this.pf`|
> | CA | `= this.ca` |
> | Iniziativa | `= this.init` |
> | Velocità | `= this.vel` |
> 

--- end-column ---

|     |              | MOD       | TS                                                               |
| --- | ------------ | ------------------------------- | ----------------------------------------- |
| FOR | `= this.for` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().for);` | |
| DES | `= this.des` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().des);` | |
| COS | `= this.cos` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().cos);` | |
| INT | `= this.int` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().int);` | +7 |
| SAG | `= this.sag` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().sag);` | +6 |
| CAR | `= this.car` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().car);` | +6 |

--- end-multi-column

> [!error]- Azioni
>> **tentacoli**
>> mischia +7 (2d10+4 psichici)
>> Se bersaglio Medio o inferiore, afferrato CD 15 + TS INT 15 stordito finchè è afferrato 
>
>> **estrarre cervello**
>> (su bersaglio afferrato) mischia +7 (10d10 p)
>> Se scende a 0pf, il bersaglio viene ucciso estraendo e divorando il suo cervello
>
>> **Assalto mentale (ricarica 5-6)**
>> cono 18m TS INT 15 nega, (4d8 +4 psichici) ed è stordita per 1 min. Ripetere TS ogni fine turno.
>
>

> [!example]- Talenti
>> **Resistenza alla magia**
>> vantaggio vs incantesimi ed effetti magici
>
>> **incantesimi innati (Psionici)**
>> CD incantesimi 15 (INT)
>> *A volontà:* Individuazione dei pensieri, levitazione
>> *1/giorno:* dominare mostri, spostamento planare (solo se stesso)
>


> [!tldr]- Storia
> Lorem ipsum dolor sit amet


