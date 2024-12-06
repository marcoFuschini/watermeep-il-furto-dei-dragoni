---
razza: Umano (medio)
classe: Kenku
sfida: 1/4
pf: "13"
ca: "13"
for: "10"
des: "16"
cos: "10"
int: "11"
sag: "10"
car: "10"
allineamento: CN
vel: 9m(6 c)
init: "3"
pagina: 183 (MM)
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
>> **Spada corta**
>> mischia +5 (1d6+3 p)
>
>> **Arco corto**
>> distanza[24-96] +5 (1d6+3 p)
>> 

> [!example]- Talenti
>> **Imboscata**
>> Vantaggio vs sorpresi
>
>> **Imitare**
>> Imita i suoni e le voci che sente. **Intuizione 14** per riconoscere l'inganno
>

