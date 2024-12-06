---
razza: Gigante (Grande)
classe: Troll
sfida: "5"
pf: "84"
ca: "15"
for: "18"
des: "13"
cos: "20"
int: "7"
sag: "9"
car: "7"
allineamento: CM
vel: 9m(6 c)
init: "1"
pagina: 290 (MM)
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
>> **Multiattacco.**
>> Esegue 3 attacchi. 1 *morso* e 2 *artigli*
>
>> **Morso.**
>> mischia +7 (1d6+4 p)
>
>> **Artiglio.**
>> mischia +7 (2d6+4 t)

> [!example]- Talenti
> **Olfatto acuto.** 
>> vantaggio prove percezione basate sull'olfatto
> 
> **Rigenerazione.** 
>> Recupera 10 pf all'inizio del suo turno. Non funziona se nel turno precedente ha subito danni da *fuoco* o *acido*. Muore solo se scende a 0 e non rigenera i pf.
>> 

> [!tldr]- Storia
> Lorem ipsum dolor sit amet


