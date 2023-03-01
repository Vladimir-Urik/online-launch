import { type NextPage } from "next";
import Head from "next/head";
import { playfairDisplay, gloock } from "~/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "~/components/Link";
import { Navbar } from "~/components/Navbar";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CircleType from "circletype";
import React, { useEffect, useRef } from "react";
import { Feature } from "~/components/Feature";
import { Package } from "~/components/Package";
import { Footer } from "~/components/Footer";
import {Point} from "~/components/Point";
import {Box} from "~/components/Box";
import {Note} from "~/components/Note";
import {User} from "~/components/User";
import {ForWho} from "~/components/ForWho";

const text = "Viac info o nás - ".repeat(3);

const Home: NextPage = () => {
  const roundedText = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    return () => {
      if (roundedText.current) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,react-hooks/exhaustive-deps
        new CircleType(roundedText.current);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>OnlineLaunch</title>
        <meta name="description" content="OnlyLaunch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"bg-primary-900"}>
        <Navbar />
        <div className={"bg-primary-800 p-6 drop-shadow-2xl"}>
          <div
            className={
              "text-center text-3xl leading-10 text-white " +
              playfairDisplay.className
            }
          >
            <h2 className={"highlight"}>Garantované výsledky</h2>
            <h2>ONLINE marketingu pre</h2>
            <h2 className={gloock.className}>elitné právnické firmy</h2>
          </div>

          <div className={"delimiter"}>
            <FontAwesomeIcon icon={faAward} />
          </div>
          <Fade>
            <Note>
              Dedikované výsledky web stránok a výkonostných kampaní pre tých
              najlepších v právnickom odvetvíi
            </Note>
          </Fade>
          <Fade>
            <Link href={"#"} className={"mt-8"}>
              Získať online stratégiu
            </Link>
          </Fade>
        </div>
        <div className={"px-6 py-10"}>
          <Fade bottom>
            <h3
              className={
                "text-center text-2xl font-semibold text-white " +
                playfairDisplay.className
              }
            >
              Prečo <span className={"highlight right"}>ONLINE marketing?</span>
            </h3>
          </Fade>

          <Fade bottom>
            <p className={"py-6 text-center text-lg font-thin text-gray-300"}>
              Narovinu - stránka bez klientov je ako postaviť si pobočku v
              strede púšte bez žiadnej cesty smerujúcej k nej.
            </p>
          </Fade>

          <Fade bottom>
            <div className={"w-full"}>
              <div className={"handshake"}>
                <span ref={roundedText}>{text}</span>
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className={"font-regular mt-8 w-full text-center text-white"}>
              <h4 className={"text-lg text-gray-300"}>
                Tu pichádza ONLINE Marketing.
              </h4>
              <p className={"text-lg text-gray-400"}>
                Marketing je ako {'"'}Digitálna cesta{'"'}, ktorá vedie vášho
                vysneného klienta ku vám s kreditnou kartou v jeho ruke
              </p>
            </div>
          </Fade>

          <Fade bottom>
            <img
              src={"/img/laptop.webp"}
              alt={"Laptop"}
              className={"mt-6 h-[350px] w-full object-cover"}
            />
          </Fade>
        </div>
        <div
          className={
            "flex flex-col gap-10 bg-light-200 px-6 py-10 drop-shadow-2xl"
          }
        >
          <Fade right>
            <Feature
              title={
                <>
                  Efektívne{" "}
                  <span className={"highlight full"}>online kampane</span>
                </>
              }
              description={
                "Vytvoríme vám kampane s jediným cieľom. Predať. Oslovíme vašu cieľovú skuipinu, ktorá má pre vás najväčšiu hodnotu, tak aby chcela spolupracovať práve s vami."
              }
            />
          </Fade>
          <Fade left>
            <Feature
              title={
                <>
                  <span className={"highlight"}>Unikátny copywritting</span> a
                  predajné vizuály
                </>
              }
              description={
                "Prezentácia a budovanie značky naprieč všetkými kanálmi je veľmi dôležitou súčaťou celého online marketingu. Zastrešíme vašu prezentáciu ako na webe, tak aj na sociálnych sieťach."
              }
              circles={"bottom-right"}
            />
          </Fade>
          <Fade right>
            <Feature
              title={
                <>
                  <span className={"highlight right"}>Moderný dizajn</span> s
                  úlohou získavania klientov
                </>
              }
              description={
                "Hlavnou úlohou webstránky, je urobiť z potencionálych zákaznikov vašich klientov. Docielime to pomocou jasnej štruktúry, textov a dizajnu určeného na predaj."
              }
              circles={"bottom-left"}
            />
          </Fade>
        </div>
        <Box backgroundColor={"PRIMARY-900"} className={"pt-10 pb-20 flex flex-col gap-10"} shadow={false}>
          <Fade bottom>
            <h3
                className={
                    "text-center text-3xl text-white " + playfairDisplay.className
                }
            >
              Online kampane ako klúč k vášmu{" "}
              <span className={"highlight"}>online úspechu</span>
            </h3>
          </Fade>
          <Fade bottom>
            <div className={"delimiter sp-0"}>
              <FontAwesomeIcon icon={faAward} />
            </div>
          </Fade>
          <Fade bottom>
            <Note>
              Je to rozdiel medzi 1,929,999,999 stránkami ktoré nezarávajú
              peniaze a 0,000000002%, ktoré zarabajú
            </Note>
          </Fade>
          <div className={"flex flex-col gap-[30px]"}>
            <Fade right>
              <Package
                  title={"Bez kampaní"}
                  icon={
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className={"mr-2 text-red-500"}
                    />
                  }
                  features={[
                    "Nestabilny tok klientov",
                    "Chaotické získavanie klientov",
                    "Slabé povedomie o značke",
                    "Smútok",
                  ]}
              />
            </Fade>

            <Fade left>
              <Package
                  title={"S kampaňami"}
                  icon={
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        className={"mr-2 text-green-400"}
                    />
                  }
                  features={[
                    "Stabilný tok klientov",
                    "Prehladné získavanie klientov",
                    "Silné povedomie",
                    "Opak smútku",
                  ]}
              />
            </Fade>
          </div>
        </Box>
        <Box backgroundColor="PRIMARY-800">
          <div className={"badge"}>
            <div className={"badge-border"}>
              <div className={"content"}>
                <FontAwesomeIcon icon={faAward} />
              </div>
            </div>
          </div>

          <Note size={"sm"} className={"mt-6"}>
            Radi cítite opak smútku?
          </Note>

          <Fade bottom>
            <h3
                className={
                    "mt-4 text-center text-3xl text-white " +
                    playfairDisplay.className
                }
            >
              Získajte{" "}
              <span className={"highlight"}>bezplatnú konzultáciu</span> určenú
              právnické kancelárie
            </h3>
          </Fade>

          <Fade bottom>
            <Link href={"#"} className={"mt-8"}>
              Získať konzuláciu zadarmo
            </Link>
          </Fade>
        </Box>

        <Box backgroundColor={"LIGHT-200"}>
          <Fade bottom>
            <h3
                className={
                    "text-center text-3xl font-thin font-semibold text-dark " +
                    playfairDisplay.className
                }
            >
              Pre koho je{" "}
              <span className={"highlight font-bold"}>Online Launch</span>{" "}
              určený?
            </h3>
          </Fade>
          <div className={"delimiter dark"}>
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className={"grid grid-cols-2 "}>
            <ForWho position={'1'} circle={"tr"} note={"Pre začínajúcu právnicku kanceláriu"} />
            <ForWho position={'2'} circle={"br"} note={"Pre právnicku kanceláriu bez výsledkov online"} />
            <ForWho position={'3'} circle={"bl"} note={"Pre právnicke kancelárie bez online stratégie"} />
            <ForWho position={'4'} note={"Pre právnikov, ktorý chcú rásť"} />
          </div>
        </Box>
        <div
          className={
            "relative bg-primary-900 px-6 py-10 text-center drop-shadow-2xl"
          }
        >
          <User img={"/img/boss.webp"} name={"Jožko Mrkvička"} role={"CEO"} />
        </div>
        <Box backgroundColor="PRIMARY-800">
          <h3
              className={"mt-4 text-3xl text-white " + playfairDisplay.className}
          >
            Získajte <span className={"highlight"}>konzultáciu</span> pre vás,
          </h3>
          <Note className={"mt-2"} center={false}>
            vďaka ktorej zístite potenciál online sveta.
          </Note>
          <Note className={"mt-6"} size={"md"} center={false}>
            Vďaka tejto <strong>bezplatnej konzultácíi</strong> budete jasne
            rozumieť dalším krokom, ktoré môžete podniknúť, aby vaša kancelária
            začala generovať konzistentné a spoľahlivé výsledky s online
            kampanami.
          </Note>
          <h3
              className={"mt-6 text-xl text-white " + playfairDisplay.className}
          >
            Táto konzultácia je dokonalá pre:
          </h3>
          <Fade left cascade>
            <ul>
              <Point>
                Kancelárie ktoré chcú previesť svoje súčastné webové stránky
                na <strong>vysokokvalitný a efektívny</strong> online
                marketing.
              </Point>

              <Point>
                Kancelárie ktoré chcú preniesť svoje offline podnikanie do{" "}
                <strong>online sveta.</strong>
              </Point>

              <Point>
                Kancelárie ktoré chcú porozumieť tomu ako dokážu zlepšiť{" "}
                <strong>ich výsledky</strong> v online priestore pomocou
                kampaní.
              </Point>

              <Point>
                Kancelárie ktoré hľadajú príležitosť ako maximalizovať{" "}
                <strong>množstvo a hodnotu dopytov.</strong>
              </Point>

              <Point>
                Kancelárie, ktoré hľadajú <strong>spoľahlivú agentúru</strong>
                , vďaka ktorej bude ich spoločnosť prioritou.
              </Point>
            </ul>
          </Fade>
          <Fade bottom>
            <Link href={"#"} className={"mt-8"}>
              Získať konzuláciu zadarmo
            </Link>
          </Fade>
        </Box>
        <Box backgroundColor="PRIMARY-900">
          <Fade bottom>
            <Note size={"sm"}>
              Máte ďaľšie otázky?
            </Note>
          </Fade>
          <Fade bottom>
            <h3
                className={
                    "mt-6 text-center text-2xl text-white " +
                    playfairDisplay.className
                }
            >
              <span className={"highlight"}>Napíšte nám</span> ešte dnes!
            </h3>
          </Fade>
          <Fade bottom>
            <div className={"delimiter"}>
              <FontAwesomeIcon icon={faAward} />
            </div>
          </Fade>
          <Fade bottom>
            <Note size={"md"} className={"px-5"}>
              Naši odborníci na digitálni marketing vytvorili množstvo úspešných
              digitálnich marketingovích kampaní pre firmy, ktoré chcú zvýšiť
              počet potenciálnych zákaznikov a kvalitu návštevnosti webových
              stránok.
            </Note>
          </Fade>
          <Fade bottom>
            <Link href={"#"} className={"mt-8"}>
              Získať konzuláciu zadarmo
            </Link>
          </Fade>
        </Box>
        <Footer />
      </main>
    </>
  );
};

export default Home;
