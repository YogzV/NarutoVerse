import {useEffect} from "react"

export default function HomePage(){

     useEffect(()=>{
        document.body.className = "home-page";

        return ()=> document.body.className = "";
     },[])


    return(
    <div>
        <h1 className="login-heading">Welcome to NarutoVerse</h1>
        <div id="home">   
            <div className = "links"> 
                <a className="menu" href="./home">HOME</a>
                <a className="menu" href="/characters">CHARACTERS</a>
                <a className="menu" href="/tailedBeast">TAILED BEAST</a>
                <a className="menu" href="/akatsuki">AKATSUKI</a>
                <a className="menu" href="/kekkai">KEKKAI GENKAI</a>
            </div> 
        <div id="content">
            
          <section class="clans">
            <h2 className="heading2"> Origins & Legacy of the Clans</h2>
            <p className="para">
              The shinobi world of Naruto is built upon the legacies of powerful clans whose histories are woven deeply into the fate of nations. From the Senju to the Uchiha and Hyūga to the Uzumaki, each clan carries a heritage of special abilities, rivalries, and alliances. The Uchiha clan is famed for the Sharingan — a dōjutsu that allows its users to perceive, predict, and copy techniques, but at the cost of strain and emotional burden. The Hyūga clan wields the Byakugan, giving them near-360° vision and insight into chakra flows, enabling precise taijutsu strikes. The Uzumaki were renowned for their mastery of sealing techniques (fūinjutsu) and exceptional vitality, though their home village was destroyed, scattering survivors across the ninja world. Over time, the strengths and flaws of the clans shaped the conflicts and alliances in Naruto’s world. The balance of power, the bonds of friendship, and the weight of vendettas all tie back to these ancestral lineages.
            </p>
          </section>

          <section class="jutsus">
            <h2 className="heading2">Power, Jutsu & the Will of the Ninja</h2>
            <p className="para">
              In the Naruto universe, chakra is the essential life energy that ninjas manipulate through hand seals to perform jutsu — supernatural techniques beyond normal human ability. Jutsu are broadly categorized into ninjutsu (elemental and chakra-based attacks), genjutsu (illusion techniques that manipulate perception), and taijutsu (physical, hand-to-hand combat). Some clans possess <em>kekkei genkai</em> — hereditary abilities combining nature types or unique abilities (like the Uchiha’s Mangekyō Sharingan). The strength of a shinobi depends not only on raw power but on discipline, strategy, and the depth of their understanding of chakra. Many legendary battles in Naruto’s history center around characters pushing past their limits, forging new techniques (like Rasengan, Chidori, or advanced transformations) and embodying the “ninja way” — the resolve, will, and bonds that sustain them. The narrative repeatedly emphasizes that the true power of a shinobi is not in technique alone but in heart, loyalty, and perseverance.
            </p>
          </section>

          <section class="quotes">
            <h2 className="heading2">Famous Quotes</h2>
            <br />
            <blockquote className="para">“I never go back on my word, that is my ninja way!” – Naruto Uzumaki</blockquote>
            <blockquote className="para">“Those who break the rules are scum, but those who abandon their friends are worse than scum.” – Kakashi Hatake</blockquote>
            <blockquote className="para">“If you don’t share someone’s pain, you can never understand them.” – Nagato / Pain</blockquote>
          </section>


        </div>
      </div>
    </div>
    )
}