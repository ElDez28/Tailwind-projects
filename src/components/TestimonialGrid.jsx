import React from "react";
import quote from "../images/bg-pattern-quotation.svg";
import daniel from "../images/image-daniel.jpg";
import { useState } from "react";
const TestimonialGrid = () => {
  const [showText, setShowText] = useState(false);
  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-10 text-white">
      <div className="grid font-sans grid-cols-1 md:grid-cols-4 gap-6">
        <div className="relative p-10 rounded-xl bg-purple-700 md:col-span-2">
          <img
            className="absolute  top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150 opacity-70 "
            src={quote}
            alt=""
          ></img>
          <div className="flex z-10 gap-4">
            <img
              className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              src={daniel}
              alt=""
            />
            <div className="text-sm mb-10">
              <h4 className="opacity-90">Daniel Clifford</h4>
              <p className="">Verified Graduent</p>
            </div>
          </div>
          <div className="z-10 mb-5 relative font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit totam
            voluptas maiores qui, voluptate dolore.
          </div>
          <p
            className={`text-sm opacity-70 ${!showText ? "line-clamp-6" : ""}`}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, iusto?
            Facilis harum blanditiis repellendus, delectus voluptate, obcaecati
            veritatis voluptatibus quasi animi beatae sunt! Exercitationem
            consectetur necessitatibus illo repudiandae sed! Possimus! Mollitia
            adipisci nostrum, minus quas earum dolores nam eligendi consectetur
            sunt tenetur laborum doloribus distinctio fugiat ea in natus
            voluptate molestias similique reprehenderit beatae neque recusandae
            assumenda maiores? Ut, quas? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. A molestiae laboriosam libero deleniti magnam
            sequi, error, veritatis quis nemo doloremque impedit debitis,
            officiis sit? Minus illo cupiditate totam magni dignissimos! Dolores
            veritatis inventore iusto id explicabo neque quo harum tempora nam
            dolore, nostrum, obcaecati commodi? Eum at facilis accusantium
            pariatur saepe sit cumque quis reiciendis maxime eligendi?
            Consequatur, molestiae cum? Suscipit repudiandae culpa, ratione quam
            esse, voluptas ullam nulla maxime odit voluptate et sapiente cumque
            pariatur alias, voluptatem distinctio ipsam assumenda expedita
            consequatur excepturi illo! Ullam vitae pariatur provident rerum!
            Officiis magnam accusamus labore quis, praesentium sunt. Iste rerum,
            officiis unde sint quia, aspernatur harum officia distinctio tempore
            facere rem beatae quaerat repudiandae cum labore quas odit
            laudantium consectetur asperiores. Repellendus quae quidem placeat
            labore, harum necessitatibus fugiat odit officia dicta id fuga unde
            fugit dolores repellat facere dolorem vitae autem quis, ratione quia
            rem neque, quos obcaecati! Sunt, aliquid! Suscipit deleniti ducimus
            a, dolorem, ut maiores non quia odit architecto ex nam adipisci iste
            est omnis odio corrupti dignissimos laboriosam tenetur fugiat. Harum
            velit nemo, consectetur reprehenderit et excepturi. Sit nesciunt
            tempore quasi maiores esse quos beatae tempora ab, dicta fugiat, quo
            doloribus! Accusamus harum et recusandae suscipit unde quasi numquam
            culpa, voluptatem voluptas necessitatibus sequi qui aliquam
            reiciendis? Nobis animi molestias ut doloribus, rem assumenda eos
            repellat pariatur, cum eum ullam quos minima in deserunt iusto?
            Laboriosam animi reiciendis ratione sit dolores vero omnis assumenda
            harum, nihil autem. Maxime fugiat iste sunt placeat explicabo ipsam
            doloremque qui commodi deserunt, consectetur corrupti quidem
            blanditiis recusandae labore libero nulla error? Id modi veritatis,
            alias expedita minima autem sunt facere corporis? Quas omnis veniam
            doloribus quis quia sequi impedit esse porro, sunt obcaecati
            distinctio suscipit similique recusandae odio quae optio commodi
            voluptate ratione veritatis! Laboriosam repellat magni veritatis
            ducimus at vero? Nemo ut accusantium reiciendis ratione quod
            molestias maxime molestiae quis provident, dolores aut.
            Reprehenderit sapiente placeat aliquid sed laudantium eaque
            laboriosam porro itaque ullam provident, eligendi quos in tempora
            consequatur. Vitae labore quia incidunt perspiciatis officiis
            laudantium eligendi veniam sunt nisi, minima quasi debitis tempore,
            adipisci, dicta dolorem delectus ipsa culpa praesentium voluptatem
            aspernatur velit. Esse eum voluptas accusamus natus! Sequi, dolores
            porro excepturi quisquam exercitationem sit modi inventore. Illo id
            laboriosam nisi. Sed cum recusandae impedit. Quibusdam iste ab
            placeat. Officiis soluta molestias a magni, repellendus
            reprehenderit sapiente consectetur. Dolor architecto eligendi vero
            autem dolorem ipsum quis cupiditate labore quo amet. Ea sit esse
            sapiente consequatur architecto perspiciatis soluta eius quam,
            nulla, fugiat eos nisi eum, officiis voluptate vitae. Recusandae
            harum, error expedita asperiores facilis nisi voluptatibus vero
            neque dolore, placeat, sapiente iste pariatur reiciendis. Quia,
            cupiditate saepe. Iure modi debitis illo beatae deleniti provident
            laboriosam unde soluta magni! Deleniti laborum ipsum incidunt
            repellendus doloribus numquam vitae assumenda, ducimus deserunt
            harum facere, recusandae hic maiores iusto sit amet sint esse beatae
            minima voluptatum. Aperiam deserunt necessitatibus nihil a
            voluptatem? Assumenda voluptas cumque eaque non beatae id, error
            quibusdam neque sequi qui necessitatibus laudantium veniam sit
            reprehenderit! Consequuntur esse beatae asperiores non hic
            praesentium molestiae autem vitae deleniti? Fugiat, ipsa! Minus ipsa
            corrupti, perspiciatis totam repudiandae omnis asperiores beatae nam
            tempore quam repellat vitae dicta. Cumque commodi id libero
            laudantium doloribus cum praesentium, vitae ut! Incidunt quisquam
            delectus iure facilis. Fuga, facere error doloribus nobis blanditiis
            sit velit architecto et tenetur commodi doloremque voluptates!
            Explicabo iste natus, nesciunt nemo dignissimos amet reiciendis
            nihil iusto debitis cupiditate laborum neque, esse beatae! Fugiat
            ipsum debitis perspiciatis laudantium non magni, quaerat aliquid
            iure earum saepe nulla exercitationem error quidem at velit dolor
            ullam ex amet magnam asperiores illum vel cupiditate itaque? Quos,
            cumque. Voluptatem ut quasi libero tempore reiciendis nesciunt, a
            sed nihil suscipit adipisci, debitis at iusto sunt ex
            exercitationem! Debitis error amet est dolores officiis labore non.
            Iste debitis mollitia quis! Itaque reprehenderit cumque inventore
            rem, quas non at voluptatem, qui est, natus facilis officia! Ipsa,
            saepe reprehenderit. Amet eligendi quis officia possimus. Culpa
            voluptatum veniam quam? Ipsum explicabo consequuntur numquam. Quo
            molestias ipsam quae provident et sequi facilis, nisi natus
            repudiandae ex asperiores expedita quibusdam architecto minus
            repellendus tempora nesciunt deleniti veniam temporibus aliquam
            libero! Eveniet ut delectus exercitationem praesentium. Sed autem
            voluptates, inventore ut corrupti maiores magni dolorum saepe hic
            eos consequuntur dolor enim ex itaque nulla qui? Voluptate velit
            odio iure magnam culpa et vel, minima ducimus voluptatum! Beatae
            vitae tempore sapiente a excepturi cupiditate at quo voluptatibus?
            Autem necessitatibus voluptates accusamus veritatis distinctio
            delectus iure, modi nobis sequi maiores nostrum non atque qui? Unde
            molestias tempore totam. Voluptatibus excepturi minus magni
            quibusdam dolore. Ea ipsa voluptates nam iure quaerat eos
            doloremque? Inventore eius esse consequuntur libero eaque veniam,
            minima explicabo provident dolorem dignissimos tempore rem magnam
            voluptatem! Rerum aspernatur fuga veritatis! Hic repudiandae sit
            totam rem ipsam suscipit! Consectetur, possimus eveniet perspiciatis
            natus dolores repellendus minus quod, blanditiis autem odio, esse
            quis eum aliquam velit accusamus deserunt. Soluta numquam
            perferendis ipsam? Temporibus vero fuga deleniti rerum eius nihil,
            unde molestias explicabo dolorem! Magni, eveniet voluptate enim
            repellendus ea maiores iure voluptas nulla labore sit fugiat atque
            incidunt? Accusantium doloremque soluta in iste explicabo repellat
            ad eligendi labore vel. Expedita totam magni in itaque reiciendis.
            Exercitationem unde perferendis quod obcaecati quibusdam possimus
            commodi, quos assumenda dolorum nobis in? Nulla aperiam aliquid
            dolores inventore unde atque corrupti odio voluptates cum excepturi
            quidem nobis ipsum provident est, porro vel vero cumque repudiandae
            debitis nemo alias magni doloremque! Iusto, officiis laboriosam!
            Debitis incidunt unde, inventore modi commodi placeat quos, rerum
            nostrum molestias dolorem enim in. Molestiae inventore unde, fugiat
            commodi magni at ex ab cumque! Nulla numquam saepe ducimus.
            Voluptas, quisquam? Doloribus voluptatem, nemo quam quae
            perspiciatis, modi, officia eaque amet eligendi officiis obcaecati
            similique sit magni debitis hic odit illum ratione quo repellat
            aspernatur error quod cupiditate est! Quibusdam, similique. Modi
            ullam corrupti, saepe perferendis maiores voluptate quisquam
            laudantium aspernatur iure asperiores cumque corporis, eaque,
            similique molestias delectus sunt sit quis! Asperiores eius
            accusamus tempore dignissimos sed rem, ab eligendi. Repellendus
            ratione eum at aliquam quidem ipsam adipisci consectetur natus,
            vitae quia non deserunt eos veniam laboriosam obcaecati tempora.
            Corrupti quidem ut quia incidunt aut aliquam ipsa enim. Eveniet,
            assumenda! Exercitationem, optio minus quas, fuga laudantium neque
            earum qui minima alias aspernatur veniam molestias facere officia ea
            ad, ipsum dolorem aliquam? Exercitationem quis ratione vitae aut
            quam error repellat delectus. Tempore, possimus atque aspernatur
            quae temporibus illo a, quasi iusto esse, cum impedit incidunt eos
            beatae repellendus numquam laboriosam! A earum nulla cumque
            consequuntur accusantium sit, non delectus maiores id. Commodi,
            ducimus assumenda exercitationem aspernatur ipsa delectus error quos
            ad inventore quia, fugiat, earum sed ex harum nostrum adipisci.
            Adipisci cumque nulla nam distinctio, pariatur rem aspernatur odit
            blanditiis id? Voluptatem natus dolorum nostrum, minima temporibus
            deserunt ex esse totam in nihil quis, officia maiores placeat sequi
            magnam nemo saepe vel sapiente tempore deleniti autem aperiam
            expedita! Nobis, repellendus ducimus. Nemo adipisci, praesentium
            quis dolore expedita sunt exercitationem quod ea fugit dolor dolorem
            excepturi aperiam tempora rerum. Distinctio vel ipsa commodi aut
            dolores, eaque placeat dolorum veniam consequuntur repellendus
            inventore. Minima modi perspiciatis officia officiis dolore,
            reiciendis ratione, exercitationem voluptas adipisci magnam rem
            fugiat provident eos quod. A animi tenetur incidunt perferendis,
            officia pariatur soluta eaque vero quo veritatis fugit. Neque libero
            sunt voluptatibus tempore repellat laboriosam, reiciendis, fugit
            praesentium enim dolores ut numquam iure eligendi exercitationem
            consequatur reprehenderit ex. Eos doloribus mollitia sequi nam
            blanditiis doloremque, eaque repellat quia. Reprehenderit harum,
            iure exercitationem repudiandae omnis earum laboriosam dolore culpa
            dolores minus hic, accusamus illum vitae quos fugiat molestiae
            pariatur perferendis quas. Consequuntur ipsum iusto rerum dolores et
            quasi doloremque! Voluptatem ullam ad eligendi adipisci eos, dolorum
            porro amet quod ab dolorem laborum repellendus, placeat, eveniet
            aperiam voluptate optio omnis dicta corrupti consectetur perferendis
            earum ducimus hic? Veniam, suscipit harum? Id, ad numquam voluptates
            sed exercitationem possimus laudantium magnam inventore obcaecati
            dolorum voluptatem labore quasi itaque nostrum ex deleniti hic
            consequatur soluta magni debitis voluptatum eos? Eveniet reiciendis
            earum aliquam. Eligendi dolorem mollitia et, ullam rerum
            reprehenderit nisi explicabo enim rem veniam magnam hic cum iure
            voluptatibus magni qui aliquid adipisci! Velit in iusto porro sit
            eaque, voluptate earum saepe. Dignissimos eos consectetur eum ipsam
            mollitia repellendus debitis ad repudiandae blanditiis voluptas fuga
            dolorem, ratione corrupti aut quae suscipit ut laboriosam possimus
            unde sint, eligendi eveniet nulla quis vitae? Quas? Obcaecati,
            voluptates illum possimus iusto cum officia incidunt provident
            quisquam commodi quia hic nemo et aut perferendis praesentium
            molestias esse soluta sunt. Distinctio nihil consequuntur enim a
            iste necessitatibus incidunt. Officiis perferendis hic quod
            repellat, velit mollitia rem deserunt ab nostrum debitis animi
            officia ipsum corporis, repudiandae dicta totam quidem beatae
            praesentium voluptatibus alias! Doloremque cum ullam doloribus
            officia dolorum! Libero quas minus sint nisi saepe ullam unde
            excepturi ad tenetur praesentium, eius tempore fugit dolorum
            officiis nihil modi harum animi nobis dolore sed error laboriosam
            quae reprehenderit. Tempore, iusto? Neque qui harum labore nihil
            aliquid dolore temporibus laboriosam ad, provident dolores aliquam
            adipisci voluptate. Fugit eveniet nobis soluta recusandae aperiam,
            deserunt cupiditate veritatis laudantium vel. Neque accusantium
            magnam pariatur.
          </p>
          {!showText && (
            <span onClick={() => setShowText(true)} className="cursor-pointer">
              Show more
            </span>
          )}
          {showText && (
            <span onClick={() => setShowText(false)} className="cursor-pointer">
              Show less
            </span>
          )}
        </div>
        <div className=" p-10 rounded-xl bg-blue-900">
          <div className="flex  gap-4">
            <img
              className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              src={daniel}
              alt=""
            />
            <div className="text-sm mb-10">
              <h4 className="opacity-90">John Walters</h4>
              <p className="">Verified Graduent</p>
            </div>
          </div>
          <div className=" mb-5 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit totam
            voluptas maiores qui, voluptate dolore.
          </div>
          <p className="text-sm opacity-70">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, iusto?
            Facilis harum blanditiis repellendus, delectus voluptate, obcaecati
            veritatis voluptatibus quasi animi beatae sunt!
          </p>
        </div>
        <div className=" p-10 rounded-xl border text-black hidden md:block md:row-span-2">
          <div className="flex  gap-4">
            <img
              className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              src={daniel}
              alt=""
            />
            <div className="text-sm mb-10">
              <h4 className="opacity-90">Marcus Blond</h4>
              <p className="">Verified Graduent</p>
            </div>
          </div>
          <div className=" mb-5 font-bold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit totam
            voluptas maiores qui, voluptate dolore.
          </div>
          <p className="text-sm opacity-70">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, iusto?
            Facilis harum blanditiis repellendus, delectus voluptate, obcaecati
            veritatis voluptatibus quasi animi beatae sunt! Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Et, iusto? Facilis harum
            blanditiis repellendus, delectus voluptate, obcaecati veritatis
            voluptatibus quasi animi beatae sunt! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Et, iusto? Facilis harum blanditiis
            repellendus, delectus voluptate, obcaecati veritatis voluptatibus
            quasi animi beatae sunt! voluptatibus quasi animi beatae sunt! Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Et, iusto?
            Facilis harum blanditiis repellendus, delectus voluptate, obcaecati
            veritatis voluptatibus quasi animi beatae sunt! voluptatibus quasi
            animi beatae sunt! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Et, iusto? Facilis harum blanditiis repellendus,
            delectus voluptate, obcaecati veritatis voluptatibus quasi animi
            beatae sunt!
          </p>
        </div>
        <div className=" p-10 rounded-xl bg-gray-900">
          <div className="flex  gap-4">
            <img
              className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              src={daniel}
              alt=""
            />
            <div className="text-sm mb-10">
              <h4 className="opacity-90">John Walters</h4>
              <p className="">Verified Graduent</p>
            </div>
          </div>
          <div className=" mb-5 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit totam
            voluptas maiores qui, voluptate dolore.
          </div>
          <p className="text-sm opacity-70">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, iusto?
            Facilis harum blanditiis repellendus, delectus voluptate, obcaecati
            veritatis voluptatibus quasi animi beatae sunt!
          </p>
        </div>
        <div className=" p-10 rounded-xl bg-gray-900 md:col-span-2">
          <div className="flex  gap-4">
            <img
              className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              src={daniel}
              alt=""
            />
            <div className="text-sm mb-10">
              <h4 className="opacity-90">John Walters</h4>
              <p className="">Verified Graduent</p>
            </div>
          </div>
          <div className=" mb-5 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit totam
            voluptas maiores qui, voluptate dolore.
          </div>
          <p className="text-sm opacity-70">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, iusto?
            Facilis harum blanditiis repellendus, delectus voluptate, obcaecati
            veritatis voluptatibus quasi animi beatae sunt!
          </p>
        </div>

        <div className=" p-10 rounded-xl border text-black md:hidden">
          <div className="flex  gap-4">
            <img
              className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              src={daniel}
              alt=""
            />
            <div className="text-sm mb-10 ">
              <h4 className="opacity-90">Marcus Blond</h4>
              <p className="">Verified Graduent</p>
            </div>
          </div>
          <div className=" mb-5 font-bold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit totam
            voluptas maiores qui, voluptate dolore.
          </div>
          <p className="text-sm opacity-70">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, iusto?
            Facilis harum blanditiis repellendus, delectus voluptate, obcaecati
            veritatis voluptatibus quasi animi beatae sunt!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialGrid;
