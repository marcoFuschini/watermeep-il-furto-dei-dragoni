---
razza: Aberrazione minuscola
classe: divoracervelli
sfida: "2"
pf: "21"
ca: "12"
for: "6"
des: "14"
cos: "13"
int: "12"
sag: "11"
car: "10"
allineamento: LM
vel: 12m(8 c)
init: "2"
pagina: 81 (MM)
---
# `= this.file.name` (Intellect devourer)
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

|     |              | MOD                                                                      |
| --- | ------------ | ------------------------------------------------------------------------ |
| FOR | `= this.for` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().for);` |
| DES | `= this.des` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().des);` |
| COS | `= this.cos` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().cos);` |
| INT | `= this.int` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().int);` |
| SAG | `= this.sag` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().sag);` |
| CAR | `= this.car` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().car);` |

--- end-multi-column

> [!error]- Azioni
>> **Multiattacco**
>> 1 artiglio + 1 divorare cervello
>
>> **Artigli**
>> mischia +4 (2d4+2 t)
>
>> **Divorare cervelli**
>> bersaglio entro 3m con cervello, TS INT 12 nega (2d10 psichici) inoltre 3d6, se il totale è pari o superiore al punteggio di INT del bersaglio, quel punteggio è ridotto a 0. Il bersaglio è stordito finchè non recupera almeno 1 punto di INT
>
>> **Ladro di corpi**
>> Tiro contrapposto di INT vs INT (non protetto da *protezione dal bene e dal male*)
>> Se vince, vedi pagina 81 (MM)
>
>

> [!example]- Talenti
>> **Individuazione dei senzienti**
>> Percepisce la presenza e l'ubicazione di ogni creatura con INT 3 o superiore entro 90m (*vuoto mentale* protegge da questa abilità)
>


> [!tldr]- Storia
> Lorem ipsum dolor sit amet


