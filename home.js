/* gerado do próprio SUSSAI (nomes, descrições e legendas da capa) */
var SUSSAI_CENAS = [
{
"n": "01",
"ic": "📦",
"nome": "Esteira simples (sensor + caixa)",
"desc": "Uma esteira com dois sensores: B1 no início da esteira e B2 na boca do recipiente. A caixa em B1 liga a esteira; quando ela cai no recipiente e passa por B2, a esteira desliga. Uma caixa por vez.",
"cap": "LIGA liga o sistema M01. A caixa no sensor B1 I03 liga a esteira Q01 com selo. No fim ela cai no recipiente e passa pela barreira B2 I04: o contato NF de I04 abre o selo e a esteira para. Uma caixa por vez.",
"tit": "Esteira: liga no B1, desliga no B2",
"teste": true,
"ent": 6,
"sai": 3,
"prog": 4,
"def": 6
},
{
"n": "02",
"ic": "🌀",
"nome": "Ventilador industrial (partida direta)",
"desc": "Monte a partida direta com selo, sinalização e relé térmico. Para fazer valendo NOTA, use o Modo Gamificação.",
"cap": "Acompanhe a energia (verde): LIGA I01 energiza Q01 e o contato de selo Q01 mantém o motor ligado. DESLIGA I02 e o térmico FT1 I03 são NF no campo e ficam em série – apertando DESLIGA a linha abre e o motor para.",
"tit": "Partida direta com selo e relé térmico",
"teste": true,
"ent": 4,
"sai": 4,
"prog": 3,
"def": 2
},
{
"n": "03",
"ic": "🧪",
"nome": "Tanque misturador (bomba + agitador)",
"desc": "A bomba enche o tanque, o agitador (hélice) bate o líquido – depois de 5 s mexendo ele muda de cor – e o produto pronto sai pela válvula de saída.",
"cap": "Ciclo automático: a bomba enche até o nível alto (LSH), o agitador mistura por 5 s – o líquido muda de azul para verde – e a válvula de saída descarrega o produto. Depois começa o próximo lote.",
"tit": "",
"teste": true,
"ent": 7,
"sai": 6,
"prog": 4,
"def": 7
},
{
"n": "04",
"ic": "🚸",
"nome": "Semáforo de uma via (mão dupla) com travessia de pedestres",
"desc": "Rua de mão dupla (vai e vem) com faixa de pedestres no meio da quadra. É um semáforo SOB DEMANDA: os carros ficam no VERDE o tempo todo e o semáforo só fecha quando um pedestre aperta a botoeira. Depois do verde mínimo, os dois semáforos dos carros vão juntos para o amarelo, fecham, e o boneco fica verde.",
"cap": "M02 guarda o pedido da botoeira (selo); M03 só inicia o ciclo depois do verde mínimo T09. Cascata – o DN de um liga o próximo: T01 verde, T02 amarelo, T03 vermelho geral, T04 boneco verde, T05 mão piscando, T06 fim do ciclo.",
"tit": "Semáforo sob demanda: temporizadores em cascata",
"teste": false,
"ent": 4,
"sai": 6,
"prog": 2,
"def": 3
},
{
"n": "05",
"ic": "🚦",
"nome": "Semáforo de duas vias com pedestres",
"desc": "Cruzamento de duas ruas de mão única com dois semáforos e travessia de pedestres por botoeira. Se as duas vias abrirem juntas, há colisão!",
"cap": "Cruzamento de duas ruas de mão única: verde → amarelo → vermelho geral, alternando as vias A e B – nunca abertas juntas. O pedestre aperta a botoeira e, no fim do ciclo, entra a travessia com boneco verde.",
"tit": "",
"teste": false,
"ent": 5,
"sai": 8,
"prog": 3,
"def": 4
},
{
"n": "06",
"ic": "✳",
"nome": "Cruzamento de 4 vias (4 semáforos) com pedestres",
"desc": "Duas avenidas de mão dupla: 4 semáforos de carros (A1/A2 ligados juntos na via A, B1/B2 na via B) e semáforos de pedestres com botoeiras nas 4 esquinas.",
"cap": "Quatro semáforos em ciclo por temporizadores: verde → amarelo → vermelho geral, alternando as vias A e B. Quando um pedestre aperta a botoeira, entra a fase de pedestres com boneco verde e mão vermelha piscando.",
"tit": "",
"teste": false,
"ent": 5,
"sai": 8,
"prog": 3,
"def": 4
},
{
"n": "07",
"ic": "🚧",
"nome": "Cancela / portão de estacionamento",
"desc": "Cancela ARTICULADA (dois braços) numa ilha no meio da pista, alta o bastante para passar caminhão. O carro chega, o laço detecta, a cancela abre. Com carro embaixo ela não desce; depois que o carro passa, fecha. Os carros chegam com espaçamento aleatório.",
"cap": "O carro no laço B1 I03 liga M02 e a cancela abre Q01 até o fim de curso FA I06. Aberta, T01 conta 5 s e o contato NF T01 derruba M02: a cancela fecha Q02 – mas nunca com carro embaixo (barreira B2 I04).",
"tit": "Cancela com temporizador",
"teste": false,
"ent": 9,
"sai": 5,
"prog": 2,
"def": 5
},
{
"n": "08",
"ic": "🍾",
"nome": "Envase de garrafas (silo + válvula)",
"desc": "A garrafa para embaixo do silo, a válvula abre e enche; o sensor de cheio fecha a válvula e a garrafa segue. Vem a próxima.",
"cap": "A garrafa no bico (B1 I03) abre o contato NF da esteira Q01 e liga a válvula Y1 Q02. O sensor de cheio B2 I04 liga M02 com selo: a válvula fecha e a esteira leva a garrafa embora.",
"tit": "Envase com sensor de posição e de cheio",
"teste": false,
"ent": 7,
"sai": 5,
"prog": 3,
"def": 6
},
{
"n": "09",
"ic": "🏢",
"nome": "Caixa d'água de prédio (bombas A/B)",
"desc": "A cisterna do térreo manda água para a caixa do último andar pela bomba A ou B. Automático pela boia ou manual pelos botões.",
"cap": "Modo AUTOMÁTICO: quando a boia da caixa do último andar pede água, a bomba escolhida (A ou B) recalca da cisterna. O eletrodo da cisterna protege a bomba contra trabalhar a seco; A e B são intertravadas.",
"tit": "",
"teste": false,
"ent": 9,
"sai": 5,
"prog": 3,
"def": 8
},
{
"n": "10",
"ic": "🔄",
"nome": "Mesa giratória (separa por tamanho)",
"desc": "Sensor B4 no fim da esteira segura a caixa até a mesa estar em 0° e livre. Na mesa, o sensor inferior vê que a caixa chegou e o superior vê se ela é alta. Alta → DIREITA, baixa → ESQUERDA.",
"cap": "O sensor B4 segura a caixa no fim da esteira até a mesa estar em 0° e livre. Na mesa, o sensor inferior detecta a chegada e o superior a altura: caixa ALTA gira para a direita, caixa BAIXA para a esquerda.",
"tit": "",
"teste": false,
"ent": 13,
"sai": 6,
"prog": 2,
"def": 9
},
{
"n": "11",
"ic": "🛤",
"nome": "4 esteiras em cascata (acúmulo) + operador",
"desc": "Quatro esteiras em sequência; no fim um operador pega as caixas e empilha no palete. Se as caixas acumulam, as esteiras param em cascata (4 → 3 → 2 → 1) e voltam quando o operador libera a última.",
"cap": "Quatro esteiras levam as caixas até o operador, que empilha no palete. Cada esteira só entrega a caixa se a seguinte estiver andando: com acúmulo, elas param em cascata (4 → 3 → 2 → 1) e voltam em sequência.",
"tit": "",
"teste": false,
"ent": 11,
"sai": 7,
"prog": 3,
"def": 8
},
{
"n": "12",
"ic": "🗜",
"nome": "Prensa hidráulica – comando bimanual e cortina de luz (NR-12)",
"desc": "A prensa só desce com as DUAS mãos nos botões do bimanual (ao mesmo tempo). A cortina de luz para a prensa se alguém colocar a mão na área de prensagem.",
"cap": "T01 (0,5 s) mede a simultaneidade: M02 só liga se as DUAS mãos apertarem antes de T01. Com M02, M03 (segurança OK: cortina livre, emergência, REARME) e sem M04, Y1 desce; chegou em S3 ou soltou as mãos, Y2 sobe.",
"tit": "Bimanual com simultaneidade (NR-12)",
"teste": false,
"ent": 10,
"sai": 7,
"prog": 3,
"def": 4
},
{
"n": "13",
"ic": "🏭",
"nome": "Esteira com separação (avançado)",
"desc": "Linha completa: alimentador pneumático, sensores, desviador, quadro elétrico, emergência NR-12 e relé térmico.",
"cap": "Seletora em AUTO + LIGA: o alimentador pneumático empurra uma caixa a cada 3,5 s, o sensor B4 identifica as caixas ALTAS e o desviador as separa; o contador fecha o lote de 10 caixas. Emergência NR-12 e relé térmico.",
"tit": "",
"teste": false,
"ent": 15,
"sai": 8,
"prog": 4,
"def": 14
},
{
"n": "14",
"ic": "🛗",
"nome": "Elevador de pessoas (4 andares)",
"desc": "Elevador com térreo + 3 andares: chamadas com registro, sensores de andar, porta automática com cortina de luz, máquina de tração com relé térmico. Aperte um botão de chamada: VOCÊ aparece no andar, entra na cabine e escolhe para qual andar quer ir.",
"cap": "Térreo + 3 andares com passageiros: cada chamada acende a lâmpada de registro, a cabine guarda o sentido (subindo/descendo) até atender as chamadas e só anda com a porta fechada. Cortina de luz protege a porta.",
"tit": "",
"teste": false,
"ent": 13,
"sai": 8,
"prog": 2,
"def": 4
}
];

/* rev63: 3 idiomas – pt-BR (index.html), en-US (index-en.html), es-419 (index-es.html). O idioma vem de <html lang>. */
var SUSSAI_I18N = {"en": {"01": {"nome": "Simple conveyor (sensor + box)", "desc": "A conveyor with two sensors: B1 at the start of the belt and B2 at the mouth of the bin. A box at B1 starts the conveyor; when it falls into the bin and passes B2, the conveyor stops. One box at a time.", "cap": "START turns on the system M01. The box at sensor B1 I03 starts conveyor Q01 with seal-in. At the end it falls into the bin and passes barrier B2 I04: the NC contact of I04 opens the seal-in and the conveyor stops. One box at a time.", "tit": "Conveyor: starts at B1, stops at B2"}, "02": {"nome": "Industrial fan (direct-on-line start)", "desc": "Build the direct-on-line start with seal-in, indicator lamps and overload relay. To do it for a SCORE, use Gamification Mode.", "cap": "Follow the power flow (green): START I01 energizes Q01 and the seal-in contact Q01 keeps the motor running. STOP I02 and overload FT1 I03 are NC in the field and wired in series - pressing STOP opens the rung and the motor stops.", "tit": "Direct-on-line start with seal-in and overload relay"}, "03": {"nome": "Mixing tank (pump + agitator)", "desc": "The pump fills the tank, the agitator (propeller) stirs the liquid - after 5 s of mixing it changes color - and the finished product leaves through the outlet valve.", "cap": "Automatic cycle: the pump fills up to the high level (LSH), the agitator mixes for 5 s - the liquid turns from blue to green - and the outlet valve discharges the product. Then the next batch begins.", "tit": ""}, "04": {"nome": "Single-road traffic light (two-way) with pedestrian crossing", "desc": "Two-way street with a mid-block crosswalk. It is an ON-DEMAND light: cars have GREEN all the time and the light only closes when a pedestrian presses the push button. After the minimum green, both car lights go to yellow together, close, and the walking figure turns green.", "cap": "M02 stores the push-button request (seal-in); M03 only starts the cycle after the minimum green T09. Cascade - the DN of one starts the next: T01 green, T02 yellow, T03 all-red, T04 walking figure green, T05 flashing hand, T06 end of cycle.", "tit": "On-demand traffic light: cascading timers"}, "05": {"nome": "Two-road traffic light with pedestrians", "desc": "Intersection of two one-way streets with two traffic lights and a pedestrian crossing with push button. If both roads open at the same time, there is a collision!", "cap": "Intersection of two one-way streets: green -> yellow -> all-red, alternating roads A and B - never open together. The pedestrian presses the push button and, at the end of the cycle, the crossing starts with the green walking figure.", "tit": ""}, "06": {"nome": "4-way intersection (4 traffic lights) with pedestrians", "desc": "Two two-way avenues: 4 car traffic lights (A1/A2 wired together on road A, B1/B2 on road B) and pedestrian lights with push buttons on the 4 corners.", "cap": "Four traffic lights cycling on timers: green -> yellow -> all-red, alternating roads A and B. When a pedestrian presses the push button, the pedestrian phase starts with the green walking figure and the flashing red hand.", "tit": ""}, "07": {"nome": "Parking barrier / gate", "desc": "ARTICULATED barrier (two arms) on an island in the middle of the road, high enough for a truck to pass. The car arrives, the loop detects it, the barrier opens. With a car underneath it does not lower; after the car passes, it closes. Cars arrive at random intervals.", "cap": "The car on loop B1 I03 sets M02 and the barrier opens Q01 up to limit switch FA I06. Once open, T01 counts 5 s and the NC contact of T01 drops M02: the barrier closes Q02 - but never with a car underneath (barrier B2 I04).", "tit": "Barrier with timer"}, "08": {"nome": "Bottle filling (silo + valve)", "desc": "The bottle stops under the silo, the valve opens and fills it; the full sensor closes the valve and the bottle moves on. Then comes the next one.", "cap": "The bottle at the nozzle (B1 I03) opens the NC contact of conveyor Q01 and turns on valve Y1 Q02. The full sensor B2 I04 sets M02 with seal-in: the valve closes and the conveyor carries the bottle away.", "tit": "Filling with position and full sensors"}, "09": {"nome": "Building water tank (pumps A/B)", "desc": "The ground-floor cistern sends water to the top-floor tank through pump A or B. Automatic by the float switch or manual by the buttons.", "cap": "AUTOMATIC mode: when the top-floor tank float asks for water, the selected pump (A or B) pumps from the cistern. The cistern electrode protects the pump against running dry; A and B are interlocked.", "tit": ""}, "10": {"nome": "Turntable (sorts by size)", "desc": "Sensor B4 at the end of the conveyor holds the box until the table is at 0° and free. On the table, the lower sensor sees that the box has arrived and the upper one sees whether it is tall. Tall -> RIGHT, short -> LEFT.", "cap": "Sensor B4 holds the box at the end of the conveyor until the table is at 0° and free. On the table, the lower sensor detects the arrival and the upper one the height: a TALL box turns right, a SHORT box turns left.", "tit": ""}, "11": {"nome": "4 cascading conveyors (accumulation) + operator", "desc": "Four conveyors in sequence; at the end an operator picks up the boxes and stacks them on the pallet. If boxes accumulate, the conveyors stop in cascade (4 -> 3 -> 2 -> 1) and restart when the operator clears the last one.", "cap": "Four conveyors carry the boxes to the operator, who stacks them on the pallet. Each conveyor only delivers the box if the next one is running: with accumulation, they stop in cascade (4 -> 3 -> 2 -> 1) and restart in sequence.", "tit": ""}, "12": {"nome": "Hydraulic press - two-hand control and light curtain (NR-12)", "desc": "The press only comes down with BOTH hands on the two-hand control buttons (at the same time). The light curtain stops the press if someone puts a hand into the pressing area.", "cap": "T01 (0.5 s) measures simultaneity: M02 only turns on if BOTH hands press before T01. With M02, M03 (safety OK: curtain clear, emergency, RESET) and without M04, Y1 moves down; at S3 or when the hands are released, Y2 moves up.", "tit": "Two-hand control with simultaneity (NR-12)"}, "13": {"nome": "Conveyor with sorting (advanced)", "desc": "Complete line: pneumatic feeder, sensors, diverter, electrical panel, NR-12 emergency stop and overload relay.", "cap": "Selector on AUTO + START: the pneumatic feeder pushes a box every 3.5 s, sensor B4 identifies the TALL boxes and the diverter separates them; the counter closes the batch of 10 boxes. NR-12 emergency stop and overload relay.", "tit": ""}, "14": {"nome": "Passenger elevator (4 floors)", "desc": "Elevator with ground floor + 3 floors: registered calls, floor sensors, automatic door with light curtain, traction machine with overload relay. Press a call button: YOU appear on the floor, enter the car and choose which floor to go to.", "cap": "Ground floor + 3 floors with passengers: each call lights the registration lamp, the car keeps its direction (up/down) until it serves the calls and only moves with the door closed. A light curtain protects the door.", "tit": ""}}, "es": {"01": {"nome": "Cinta simple (sensor + caja)", "desc": "Una cinta con dos sensores: B1 al inicio de la cinta y B2 en la boca del recipiente. La caja en B1 enciende la cinta; cuando cae en el recipiente y pasa por B2, la cinta se apaga. Una caja a la vez.", "cap": "MARCHA enciende el sistema M01. La caja en el sensor B1 I03 enciende la cinta Q01 con enclavamiento. Al final cae en el recipiente y pasa por la barrera B2 I04: el contacto NC de I04 abre el enclavamiento y la cinta se detiene. Una caja a la vez.", "tit": "Cinta: enciende en B1, apaga en B2"}, "02": {"nome": "Ventilador industrial (arranque directo)", "desc": "Arme el arranque directo con enclavamiento, señalización y relé térmico. Para hacerlo con NOTA, use el Modo Gamificación.", "cap": "Siga la energía (verde): MARCHA I01 energiza Q01 y el contacto de enclavamiento Q01 mantiene el motor encendido. PARADA I02 y el térmico FT1 I03 son NC en campo y están en serie - al presionar PARADA la línea se abre y el motor se detiene.", "tit": "Arranque directo con enclavamiento y relé térmico"}, "03": {"nome": "Tanque mezclador (bomba + agitador)", "desc": "La bomba llena el tanque, el agitador (hélice) bate el líquido - después de 5 s mezclando cambia de color - y el producto listo sale por la válvula de salida.", "cap": "Ciclo automático: la bomba llena hasta el nivel alto (LSH), el agitador mezcla durante 5 s - el líquido cambia de azul a verde - y la válvula de salida descarga el producto. Luego empieza el siguiente lote.", "tit": ""}, "04": {"nome": "Semáforo de una vía (doble sentido) con cruce peatonal", "desc": "Calle de doble sentido con paso peatonal a mitad de cuadra. Es un semáforo A DEMANDA: los autos están en VERDE todo el tiempo y el semáforo solo cierra cuando un peatón presiona el pulsador. Después del verde mínimo, los dos semáforos de autos pasan juntos al amarillo, cierran, y el muñeco queda en verde.", "cap": "M02 guarda el pedido del pulsador (enclavamiento); M03 solo inicia el ciclo después del verde mínimo T09. Cascada - el DN de uno enciende el siguiente: T01 verde, T02 amarillo, T03 rojo general, T04 muñeco verde, T05 mano parpadeando, T06 fin del ciclo.", "tit": "Semáforo a demanda: temporizadores en cascada"}, "05": {"nome": "Semáforo de dos vías con peatones", "desc": "Cruce de dos calles de sentido único con dos semáforos y cruce peatonal por pulsador. ¡Si las dos vías abren juntas, hay choque!", "cap": "Cruce de dos calles de sentido único: verde -> amarillo -> rojo general, alternando las vías A y B - nunca abiertas juntas. El peatón presiona el pulsador y, al final del ciclo, entra el cruce con el muñeco verde.", "tit": ""}, "06": {"nome": "Cruce de 4 vías (4 semáforos) con peatones", "desc": "Dos avenidas de doble sentido: 4 semáforos de autos (A1/A2 conectados juntos en la vía A, B1/B2 en la vía B) y semáforos peatonales con pulsadores en las 4 esquinas.", "cap": "Cuatro semáforos en ciclo por temporizadores: verde -> amarillo -> rojo general, alternando las vías A y B. Cuando un peatón presiona el pulsador, entra la fase peatonal con el muñeco verde y la mano roja parpadeando.", "tit": ""}, "07": {"nome": "Barrera / portón de estacionamiento", "desc": "Barrera ARTICULADA (dos brazos) en una isla en medio de la calzada, lo bastante alta para que pase un camión. El auto llega, el lazo lo detecta, la barrera abre. Con un auto debajo no baja; después de que el auto pasa, cierra. Los autos llegan con espaciado aleatorio.", "cap": "El auto en el lazo B1 I03 enciende M02 y la barrera abre Q01 hasta el final de carrera FA I06. Abierta, T01 cuenta 5 s y el contacto NC de T01 apaga M02: la barrera cierra Q02 - pero nunca con un auto debajo (barrera B2 I04).", "tit": "Barrera con temporizador"}, "08": {"nome": "Envasado de botellas (silo + válvula)", "desc": "La botella se detiene debajo del silo, la válvula abre y la llena; el sensor de lleno cierra la válvula y la botella sigue. Viene la siguiente.", "cap": "La botella en la boquilla (B1 I03) abre el contacto NC de la cinta Q01 y enciende la válvula Y1 Q02. El sensor de lleno B2 I04 enciende M02 con enclavamiento: la válvula cierra y la cinta se lleva la botella.", "tit": "Envasado con sensor de posición y de lleno"}, "09": {"nome": "Tanque de agua de edificio (bombas A/B)", "desc": "La cisterna de la planta baja envía agua al tanque del último piso con la bomba A o B. Automático por el flotante o manual por los botones.", "cap": "Modo AUTOMÁTICO: cuando el flotante del tanque del último piso pide agua, la bomba elegida (A o B) impulsa desde la cisterna. El electrodo de la cisterna protege la bomba contra el trabajo en seco; A y B tienen enclavamiento mutuo.", "tit": ""}, "10": {"nome": "Mesa giratoria (separa por tamaño)", "desc": "El sensor B4 al final de la cinta retiene la caja hasta que la mesa esté en 0° y libre. En la mesa, el sensor inferior ve que la caja llegó y el superior ve si es alta. Alta -> DERECHA, baja -> IZQUIERDA.", "cap": "El sensor B4 retiene la caja al final de la cinta hasta que la mesa esté en 0° y libre. En la mesa, el sensor inferior detecta la llegada y el superior la altura: la caja ALTA gira a la derecha, la caja BAJA a la izquierda.", "tit": ""}, "11": {"nome": "4 cintas en cascada (acumulación) + operador", "desc": "Cuatro cintas en secuencia; al final un operador toma las cajas y las apila en el pallet. Si las cajas se acumulan, las cintas paran en cascada (4 -> 3 -> 2 -> 1) y vuelven cuando el operador libera la última.", "cap": "Cuatro cintas llevan las cajas hasta el operador, que las apila en el pallet. Cada cinta solo entrega la caja si la siguiente está andando: con acumulación, paran en cascada (4 -> 3 -> 2 -> 1) y vuelven en secuencia.", "tit": ""}, "12": {"nome": "Prensa hidráulica - mando bimanual y cortina de luz (NR-12)", "desc": "La prensa solo baja con LAS DOS manos en los botones del bimanual (al mismo tiempo). La cortina de luz detiene la prensa si alguien pone la mano en el área de prensado.", "cap": "T01 (0,5 s) mide la simultaneidad: M02 solo se enciende si LAS DOS manos presionan antes de T01. Con M02, M03 (seguridad OK: cortina libre, emergencia, REARME) y sin M04, Y1 baja; al llegar a S3 o al soltar las manos, Y2 sube.", "tit": "Bimanual con simultaneidad (NR-12)"}, "13": {"nome": "Cinta con separación (avanzado)", "desc": "Línea completa: alimentador neumático, sensores, desviador, tablero eléctrico, emergencia NR-12 y relé térmico.", "cap": "Selectora en AUTO + MARCHA: el alimentador neumático empuja una caja cada 3,5 s, el sensor B4 identifica las cajas ALTAS y el desviador las separa; el contador cierra el lote de 10 cajas. Emergencia NR-12 y relé térmico.", "tit": ""}, "14": {"nome": "Ascensor de personas (4 pisos)", "desc": "Ascensor con planta baja + 3 pisos: llamadas con registro, sensores de piso, puerta automática con cortina de luz, máquina de tracción con relé térmico. Presione un botón de llamada: USTED aparece en el piso, entra en la cabina y elige a qué piso quiere ir.", "cap": "Planta baja + 3 pisos con pasajeros: cada llamada enciende la lámpara de registro, la cabina guarda el sentido (subiendo/bajando) hasta atender las llamadas y solo se mueve con la puerta cerrada. La cortina de luz protege la puerta.", "tit": ""}}};
var SUSSAI_TX = {"pt": {"cena": "CENA ", "cena2": "Cena ", "noteste": " · NO TESTE GRÁTIS", "tag": "no teste grátis", "ent": " entradas · ", "sai": " saídas · ", "prog": " programas · ", "def": " defeitos", "dono": "Pronto: este navegador não conta mais nas estatísticas do site.", "eNome": "Escreva o seu nome completo (nome e sobrenome).", "eFone": "Informe o celular/WhatsApp com DDD.", "eMail": "Informe um e-mail válido (o e-mail Google que vai usar no SUSSAI).", "eCid": "Informe a cidade e o estado.", "eInst": "Informe o nome da escola ou empresa.", "eOk": "Marque que você leu e aceita os Termos de uso.", "oGmail": "✔ O Gmail abriu com o pedido pronto. Confira e clique em Enviar.", "oMail": "✔ Abrindo o seu programa de e-mail… Se nada abrir, use “Enviar pelo Gmail” ou “Copiar mensagem”.", "oCop": "✔ Mensagem copiada. Cole num e-mail para ", "copie": "Copie a mensagem:", "para": "Para: ", "assunto": "Assunto: ", "b": ["Olá! Quero comprar uma licença do SUSSAI – Simulador de CLP 3D.", "=== PEDIDO ===", "Plano: ", "Forma de pagamento: ", "=== MEUS DADOS ===", "Nome completo: ", "CPF/CNPJ: ", "(não informado)", "Celular/WhatsApp: ", "E-mail Google para a licença: ", "Cidade/UF: ", "=== LICENÇA COLETIVA ===", "Escola/empresa: ", "Nº de computadores: ", "E-mails Google dos computadores: ", "(envio depois)", "Observações: ", "Li e aceito os Termos de uso e a Política de privacidade (sussai-software.github.io).", "Aguardo os dados para pagamento. Depois da confirmação, a licença é liberada nesse e-mail Google", "e eu baixo o SUSSAI Completo em https://sussai-software.github.io/#completo", "Obrigado!", "Pedido de licença SUSSAI – "]}, "en": {"cena": "SCENE ", "cena2": "Scene ", "noteste": " · IN THE FREE TRIAL", "tag": "in the free trial", "ent": " inputs · ", "sai": " outputs · ", "prog": " programs · ", "def": " faults", "dono": "Done: this browser no longer counts in the site statistics.", "eNome": "Write your full name (first and last name).", "eFone": "Enter your mobile/WhatsApp number with country and area code.", "eMail": "Enter a valid e-mail (the Google e-mail you will use in SUSSAI).", "eCid": "Enter your city and state/country.", "eInst": "Enter the name of the school or company.", "eOk": "Check that you have read and accept the Terms of use.", "oGmail": "✔ Gmail opened with the order ready. Check it and click Send.", "oMail": "✔ Opening your e-mail program… If nothing opens, use “Send with Gmail” or “Copy message”.", "oCop": "✔ Message copied. Paste it into an e-mail to ", "copie": "Copy the message:", "para": "To: ", "assunto": "Subject: ", "b": ["Hello! I would like to buy a license for SUSSAI – 3D PLC Simulator.", "=== ORDER ===", "Plan: ", "Payment method: ", "=== MY DETAILS ===", "Full name: ", "Tax ID (CPF/CNPJ or equivalent): ", "(not provided)", "Mobile/WhatsApp: ", "Google e-mail for the license: ", "City/State/Country: ", "=== GROUP LICENSE ===", "School/company: ", "Number of computers: ", "Google e-mails of the computers: ", "(I will send later)", "Notes: ", "I have read and accept the Terms of use and the Privacy policy (sussai-software.github.io).", "I look forward to the payment details. After confirmation, the license is released to this Google e-mail", "and I will download SUSSAI Completo at https://sussai-software.github.io/index-en.html#completo", "Thank you!", "SUSSAI license order – "]}, "es": {"cena": "ESCENA ", "cena2": "Escena ", "noteste": " · EN LA PRUEBA GRATIS", "tag": "en la prueba gratis", "ent": " entradas · ", "sai": " salidas · ", "prog": " programas · ", "def": " fallas", "dono": "Listo: este navegador ya no cuenta en las estadísticas del sitio.", "eNome": "Escriba su nombre completo (nombre y apellido).", "eFone": "Ingrese su celular/WhatsApp con código de país y de área.", "eMail": "Ingrese un correo válido (el correo Google que va a usar en SUSSAI).", "eCid": "Ingrese su ciudad y provincia/país.", "eInst": "Ingrese el nombre de la escuela o empresa.", "eOk": "Marque que leyó y acepta los Términos de uso.", "oGmail": "✔ Gmail se abrió con el pedido listo. Revíselo y haga clic en Enviar.", "oMail": "✔ Abriendo su programa de correo… Si no se abre nada, use “Enviar por Gmail” o “Copiar mensaje”.", "oCop": "✔ Mensaje copiado. Péguelo en un correo para ", "copie": "Copie el mensaje:", "para": "Para: ", "assunto": "Asunto: ", "b": ["¡Hola! Quiero comprar una licencia de SUSSAI – Simulador de PLC 3D.", "=== PEDIDO ===", "Plan: ", "Forma de pago: ", "=== MIS DATOS ===", "Nombre completo: ", "Documento fiscal (CPF/CNPJ o equivalente): ", "(no informado)", "Celular/WhatsApp: ", "Correo Google para la licencia: ", "Ciudad/Provincia/País: ", "=== LICENCIA COLECTIVA ===", "Escuela/empresa: ", "Cantidad de computadoras: ", "Correos Google de las computadoras: ", "(los envío después)", "Observaciones: ", "Leí y acepto los Términos de uso y la Política de privacidad (sussai-software.github.io).", "Espero los datos para el pago. Después de la confirmación, la licencia se libera en ese correo Google", "y descargo SUSSAI Completo en https://sussai-software.github.io/index-es.html#completo", "¡Gracias!", "Pedido de licencia SUSSAI – "]}};
/* SUSSAI – página inicial: capa com imagens reais passando, galeria, formulário de compra */
(function () {
  'use strict';
  var C = (typeof SUSSAI_CENAS !== 'undefined' && SUSSAI_CENAS) || window.SUSSAI_CENAS || [], $ = function (id) { return document.getElementById(id); };
  var LG = String((document.documentElement && document.documentElement.lang) || 'pt').slice(0, 2).toLowerCase(); if (!SUSSAI_TX[LG]) LG = 'pt';
  var X = SUSSAI_TX[LG], B = X.b;
  if (SUSSAI_I18N[LG]) C = C.map(function (c) { var o = {}, k, tr = SUSSAI_I18N[LG][c.n] || {}; for (k in c) o[k] = c[k]; for (k in tr) o[k] = tr[k]; return o; });
  /* idioma: lembra a escolha (links PT/EN/ES) e, na 1ª visita à página em português, sugere o idioma do navegador */
  try {
    document.addEventListener('click', function (e) { var a = e.target && e.target.closest ? e.target.closest('[data-lang]') : null; if (a) localStorage.setItem('sussai.lang', a.getAttribute('data-lang')); }, true);
    var pref = localStorage.getItem('sussai.lang'), nav = String(navigator.language || '').slice(0, 2).toLowerCase();
    if (LG === 'pt' && !pref && (nav === 'en' || nav === 'es') && !/[?&]lang=pt/.test(location.search)) { localStorage.setItem('sussai.lang', nav); location.replace('index-' + nav + '.html' + location.search + location.hash); return; }
    if (LG === 'pt' && (pref === 'en' || pref === 'es') && !/[?&]lang=pt/.test(location.search) && /(^|\/)(index\.html)?$/.test(location.pathname)) { location.replace('index-' + pref + '.html' + location.search + location.hash); return; }
  } catch (e) { }
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var img = function (c) { return 'cena' + c.n + '.jpg'; };
  /* imagem não encontrada: tenta a pasta imagens/ (site antigo) e, se faltar, mostra o ícone da máquina */
  document.addEventListener('error', function (e) {
    var im = e.target; if (!im || im.tagName !== 'IMG' || !/cena\d\d\.jpg/.test(im.src || '')) return;
    if (!/imagens\//.test(im.src)) { im.src = 'imagens/' + im.src.split('/').pop(); return; }
    im.removeAttribute('src'); im.classList.add('semfoto');
  }, true);


  /* ---------- estatísticas ANÔNIMAS (só o dono vê, na planilha e no e-mail) ----------
     Manda só: evento, plano clicado, um número aleatório do navegador, de onde veio
     (ex.: linkedin.com) e se é celular. Sem nome, e-mail ou IP.
     O dono não entra na conta: abra uma vez o site com  #dono  no fim do endereço. */
  var STAT_URL = 'https://script.google.com/macros/s/AKfycbzUmiNAeX4wbS7guwxjm8zCPOKOhLBbbenZhcpfXmEKk3cpC1--naS5TjsgfWDqY3ggTw/exec';
  var dono = false, vid = 'anon';
  try {
    if (location.hash === '#dono') { localStorage.setItem('sussai.dono', '1'); alert(X.dono); }
    if (location.hash === '#visitante') { localStorage.removeItem('sussai.dono'); }
    dono = localStorage.getItem('sussai.dono') === '1';
    vid = localStorage.getItem('sussai.vid');
    if (!vid) { vid = (Date.now().toString(36) + Math.random().toString(36).slice(2, 8)).slice(-12); localStorage.setItem('sussai.vid', vid); }
  } catch (e) { }
  function origem() {
    try {
      var m = /[?&]utm_source=([^&#]+)/.exec(location.search || ''); if (m) return decodeURIComponent(m[1]).slice(0, 40);
      var r = document.referrer || ''; if (!r) return 'direto';
      var h = r.split('/')[2] || ''; if (/github\.io$/.test(h)) return 'direto';
      return h.replace(/^www\./, '').replace(/^(l|lnkd)\./, '').replace(/^(m|mobile)\./, '');
    } catch (e) { return 'direto'; }
  }
  function ev(nome, det) {
    if (dono) return;
    try {
      var s = JSON.stringify({ acao: 'evento', ev: nome, det: det || '', v: vid, o: origem(),
        d: /Mobi|Android|iPhone/i.test((navigator && navigator.userAgent) || '') ? 'celular' : 'computador' });
      if (navigator && navigator.sendBeacon && navigator.sendBeacon(STAT_URL, new Blob([s], { type: 'text/plain' }))) return;
      if (typeof fetch === 'function') fetch(STAT_URL, { method: 'POST', mode: 'no-cors', body: s, keepalive: true });
    } catch (e) { }
  }
  ev('visita');
  /* cliques em links: downloads, manual, e-mails */
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a') : null; if (!a) return;
    var h = a.getAttribute('href') || '';
    if (/SUSSAI_Teste_Windows\.zip/.test(h)) ev('download_teste');
    else if (/SUSSAI_Completo\.zip/.test(h)) ev('download_completo');
    else if (/Manual_do_Usuario\.pdf/.test(h)) ev('manual');
    else if (/^mailto:/.test(h)) ev(/avisado/i.test(decodeURIComponent(h)) ? 'aviso' : 'contato');
  }, true);

  /* ---------- menu no celular ---------- */
  var bg = $('burger'), mn = $('menu');
  if (bg && mn) { bg.onclick = function () { mn.classList.toggle('aberto'); }; mn.addEventListener('click', function (e) { if (e.target.tagName === 'A') mn.classList.remove('aberto'); }); }

  /* ---------- capa: as 14 máquinas passando (imagens reais) ---------- */
  var sl = $('slides'), k = 0, T = 7000, t0 = Date.now(), parado = false, ims = [];
  if (sl && C.length) {
    C.forEach(function (c, i) { var im = document.createElement('img'); im.alt = c.nome; if (i < 2) im.src = img(c); else im.dataset.src = img(c); sl.appendChild(im); ims.push(im); });
    var pts = $('lgPontos');
    C.forEach(function (c, i) { var b = document.createElement('button'); b.title = c.n + ' – ' + c.nome; b.onclick = function () { mostra(i); }; pts.appendChild(b); });
  }
  function mostra(i) {
    k = (i + C.length) % C.length; t0 = Date.now();
    ims.forEach(function (im, j) { if (j === k) { if (im.dataset.src) { im.src = im.dataset.src; delete im.dataset.src; } im.classList.remove('on'); void im.offsetWidth; im.classList.add('on'); } else im.classList.remove('on'); });
    var nx = ims[(k + 1) % ims.length]; if (nx && nx.dataset.src) { nx.src = nx.dataset.src; delete nx.dataset.src; }   // pré-carrega a próxima
    var c = C[k];
    $('lgNum').textContent = X.cena + c.n + (c.teste ? X.noteste : '');
    $('lgNome').textContent = c.ic + '  ' + (c.tit || c.nome);
    $('lgCap').textContent = c.cap || c.desc;
    Array.prototype.forEach.call($('lgPontos').children, function (b, j) { b.classList.toggle('on', j === k); });
  }
  if (C.length) mostra(0);
  var leg = $('legenda');
  if (leg) { leg.onmouseenter = function () { parado = true; }; leg.onmouseleave = function () { parado = false; t0 = Date.now() - (parseFloat($('lgBarra').style.width) || 0) / 100 * T; }; }
  setInterval(function () {
    if (!C.length || parado || document.hidden) return;
    var p = (Date.now() - t0) / T;
    if (p >= 1) { mostra(k + 1); p = 0; }
    $('lgBarra').style.width = (p * 100).toFixed(1) + '%';
  }, 100);
  /* vídeo da capa (opcional): se existir video/vitrine.mp4 ou .webm, ele substitui as imagens */
  var v = $('bgVideo');
  if (v) {
    ['mp4', 'webm'].forEach(function (x) { var s = document.createElement('source'); s.src = 'video/vitrine.' + x; s.type = 'video/' + x; v.appendChild(s); });
    v.addEventListener('playing', function () { v.classList.add('ok'); sl.style.display = 'none'; leg.style.display = 'none'; });
    v.load(); var pr = v.play(); if (pr && pr.catch) pr.catch(function () { });
  }

  /* ---------- galeria ---------- */
  var gal = $('galeria');
  if (gal) {
    gal.innerHTML = C.map(function (c, i) {
      return '<div class="card" data-i="' + i + '"><img src="' + img(c) + '" alt="' + esc(c.nome) + '" loading="lazy"><div>' +
        (c.teste ? '<span class="tag">' + X.tag + '</span>' : '') + '<span class="n">' + X.cena + c.n + '</span><b>' + esc(c.ic + ' ' + c.nome) + '</b>' +
        '<span class="d">' + esc(c.desc) + '</span><div class="info">' + c.ent + X.ent + c.sai + X.sai + c.prog + X.prog + c.def + X.def + '</div></div></div>';
    }).join('');
    gal.addEventListener('click', function (e) { var c = e.target.closest('.card'); if (c) abreLb(+c.dataset.i); });
  }
  var li = 0;
  function abreLb(i) {
    li = (i + C.length) % C.length; var c = C[li];
    $('lbImg').src = img(c); $('lbImg').alt = c.nome;
    $('lbCap').innerHTML = '<b>' + X.cena2 + c.n + ' – ' + esc(c.nome) + '</b>' + esc(c.desc) + (c.cap ? '<br><span style="color:#8b949e">' + esc(c.cap) + '</span>' : '');
    $('lb').hidden = false;
  }
  if ($('lb')) {
    $('lbX').onclick = function () { $('lb').hidden = true; };
    $('lbP').onclick = function () { abreLb(li - 1); }; $('lbN').onclick = function () { abreLb(li + 1); };
    $('lb').addEventListener('click', function (e) { if (e.target.id === 'lb') $('lb').hidden = true; });
  }

  /* ---------- formulário de compra: monta o e-mail completo ---------- */
  var PARA = 'contato.sussai@gmail.com', md = $('compra');
  function abreCompra(plano) {
    if (plano) { var s = $('cPlano'); for (var i = 0; i < s.options.length; i++) if (s.options[i].text === plano) s.selectedIndex = i; }
    grupo(); $('cMsg').textContent = ''; md.hidden = false; ev('comprar_abriu', pk());
    try { var g = JSON.parse(localStorage.getItem('sussai.pedido') || '{}'); ['cNome', 'cDoc', 'cFone', 'cEmail', 'cCidade', 'cInst'].forEach(function (id) { if (g[id] && !$(id).value) $(id).value = g[id]; }); } catch (e) { }
    setTimeout(function () { ($('cNome').value ? $('cFone') : $('cNome')).focus(); }, 50);
  }
  function pk() { var s = $('cPlano'), o = s.options[s.selectedIndex]; return (o && o.getAttribute('data-k')) || s.value; }
  function grupo() { $('cGrupo').hidden = !/Coletiva/.test(pk()); }
  Array.prototype.forEach.call(document.querySelectorAll('[data-plano]'), function (b) { b.addEventListener('click', function () { ev('plano', b.getAttribute('data-k') || b.getAttribute('data-plano')); abreCompra(b.getAttribute('data-plano')); }); });
  if (md) {
    $('cX').onclick = function () { md.hidden = true; };
    md.addEventListener('click', function (e) { if (e.target === md) md.hidden = true; });
    $('cPlano').onchange = grupo;
    $('cFone').addEventListener('input', function () {
      var d = this.value.replace(/\D/g, '').replace(/^55(?=\d{11})/, '').slice(0, 11);
      this.value = d.length > 6 ? '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7) : d.length > 2 ? '(' + d.slice(0, 2) + ') ' + d.slice(2) : d;
    });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { if (md) md.hidden = true; if ($('lb')) $('lb').hidden = true; } });
  function msg(t, ok) { var m = $('cMsg'); m.textContent = t; m.className = 'ms ' + (ok ? 'ok' : 'er'); }
  function pedido() {
    var v = function (id) { return ($(id).value || '').trim(); }, erro = null;
    ['cNome', 'cFone', 'cEmail', 'cCidade', 'cInst'].forEach(function (id) { $(id).classList.remove('erro'); });
    var marca = function (id, t) { $(id).classList.add('erro'); if (!erro) { erro = t; $(id).focus(); } };
    if (v('cNome').split(/\s+/).length < 2) marca('cNome', X.eNome);
    if (v('cFone').replace(/\D/g, '').length < 10) marca('cFone', X.eFone);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v('cEmail'))) marca('cEmail', X.eMail);
    if (!v('cCidade')) marca('cCidade', X.eCid);
    var col = /Coletiva/.test(pk());
    if (col && !v('cInst')) marca('cInst', X.eInst);
    if (!erro && !$('cOk').checked) erro = X.eOk;
    if (erro) { msg('✖ ' + erro); return null; }
    try { var g = {}; ['cNome', 'cDoc', 'cFone', 'cEmail', 'cCidade', 'cInst'].forEach(function (id) { g[id] = v(id); }); localStorage.setItem('sussai.pedido', JSON.stringify(g)); } catch (e) { }
    var plano = v('cPlano'), curto = plano.split(' – ')[0];
    var L = [B[0], '',
      B[1], B[2] + plano, B[3] + v('cPag'), '',
      B[4], B[5] + v('cNome'), B[6] + (v('cDoc') || B[7]), B[8] + v('cFone'),
      B[9] + v('cEmail'), B[10] + v('cCidade')];
    if (col) L.push('', B[11], B[12] + v('cInst'), B[13] + (v('cPcs') || '20'), B[14] + (v('cEmails') || B[15]));
    if (v('cObs')) L.push('', B[16] + v('cObs'));
    L.push('', B[17], '', B[18], B[19], '', B[20], v('cNome'));
    if (LG !== 'pt') L.push('', '(' + (LG === 'en' ? 'Pedido enviado pela página em inglês' : 'Pedido enviado pela página em espanhol') + ' – plano: ' + pk() + ')');
    return { assunto: B[21] + curto + ' – ' + v('cNome') + (LG !== 'pt' ? ' [' + LG.toUpperCase() + ']' : ''), corpo: L.join('\n') };
  }
  if (md) {
    $('cGmail').onclick = function () {
      var p = pedido(); if (!p) return;
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(PARA) + '&su=' + encodeURIComponent(p.assunto) + '&body=' + encodeURIComponent(p.corpo), '_blank', 'noopener');
      ev('comprar_enviou', pk().split(' – ')[0] + ' (Gmail)');
      msg(X.oGmail, true);
    };
    $('cMail').onclick = function () {
      var p = pedido(); if (!p) return;
      location.href = 'mailto:' + PARA + '?subject=' + encodeURIComponent(p.assunto) + '&body=' + encodeURIComponent(p.corpo);
      ev('comprar_enviou', pk().split(' – ')[0] + ' (e-mail)');
      msg(X.oMail, true);
    };
    $('cCopiar').onclick = function () {
      var p = pedido(); if (!p) return;
      ev('comprar_enviou', pk().split(' – ')[0] + ' (copiou)');
      var txt = X.para + PARA + '\n' + X.assunto + p.assunto + '\n\n' + p.corpo;
      var ok = function () { msg(X.oCop + PARA + '.', true); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(ok, function () { prompt(X.copie, txt); });
      else { prompt(X.copie, txt); ok(); }
    };
  }
  /* abrir o formulário direto por link: ...github.io/#comprar */
  if (location.hash === '#comprar' && md) abreCompra();
  window.SUSSAI_SITE = { abreCompra: abreCompra, pedido: pedido, mostra: mostra, lang: LG, pk: pk };
})();
