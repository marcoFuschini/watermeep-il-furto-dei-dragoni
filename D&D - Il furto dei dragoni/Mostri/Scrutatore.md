---
razza: Aberrazione minuscola
classe: scrutatore
sfida: 1/2
pf: "13"
ca: "13"
for: "3"
des: "17"
cos: "14"
int: "3"
sag: "10"
car: "7"
allineamento: NM
vel: volare 9m(6c) [fluttuare]
init: "3"
pagina: 213 (FdD)
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
| INT | `= this.int` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().int);` | |
| SAG | `= this.sag` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().sag);` | +2 |
| CAR | `= this.car` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().car);` | |

--- end-multi-column

> [!error]- Azioni
>> **Morso**
>> mischia +5 (1 p)
>
>> **Raggi oculari**
>> Scaglia 2 raggi casuali vs 1 o 2 bersagli entro 18m(12 c)
>> Tira 2d4, ritira se uguale
>> **1 - Raggio Frastornante** {colore magenta}
>>> TS SAG 12 nega - affascinato fino all'inizio del prossimo turno dello scrutatore
>>> dimezzata la velocità e svantaggio al TpC
>>
>> **2 - Raggio di Paura** {colore verde}
>>> TS SAG 12 nega - spaventato fino all'inizio del prossimo turno dello scrutatore
>>> obbligato a muovere il più lontano possibile dallo scrutatore
>>
>> **3 - Raggio di Gelo** {colore azzurro}
>>> TS DES 12 nega - (3d6 freddo) 
>>
>> **4 - Raggio Telecinetico** {colore viola}
>>> (vs Media o inferiore) TS FOR 12 nega - muove il bersaglio di 9m (possibilmente allontanandolo)

> [!example]- Talenti
>> **Aggressivo**
>> az. bonus scatto
>
>> **Imitare**
>> Può imitare le parole più semplici che abbia sentito in qualsiasi linguaggio. 
>> **Intuizione 10** per capire che sono imitate.
>
