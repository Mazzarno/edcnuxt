<template>
  <div fluid fill-height>
    <section>
      <v-img>
        <template v-slot:placeholder>
          <v-row class="fill-height" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </section>
    <section>
      <v-row class="justify-center align-center">
        <v-col cols="12">
          <h1 class="headline my-5 primary--text">NOS ACTIVITES</h1>
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <v-col cols="12" md="10" sm="10">
          <v-row class="justify-center align-center">
            <v-col cols="10" sm="10" md="4">
              <v-img
                aspect-ratio="1"
                height="150"
                width="150"
                :src="require('@/assets/img/totem4.jpg')"
                :lazy-src="require('@/assets/img/totem4.jpg')"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
            <v-col cols="10" sm="6" md="6">
              <p class="text-left body-1">
                Pour répondre aux besoins que nous avons constaté au sein des
                copropriétés et ainsi nous approcher de la vision du monde de
                l’habitat dont nous rêvons, l’Echappée met en place
                <b>trois type d’activités</b> :
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <section class="bg-action2">
        <v-divider class="ma-4 primary"></v-divider>
        <v-row class="justify-center">
          <v-col cols="12" md="8" sm="10">
            <v-row class="justify-center align-center">
              <v-col cols="10" sm="10" md="3">
                <v-img
                  height="150"
                  width="150"
                  class="w"
                  aspect-ratio="1"
                  :src="require('@/assets/img/1.png')"
                  :lazy-src="require('@/assets/img/1.png')"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>

              <v-col cols="9">
                <h1 class="mb-5 text-left titre headline primary--text">
                  1⦁ Accompagnement de copropriétés
                </h1>
                <p class="text-left body">
                  Quand nous intervenons directement dans une copropriété, notre
                  objectif est d’accompagner les habitant·e·s à améliorer leur
                  cadre de vie en impulsant une dynamique collective apaisée et
                  fonctionnelle.
                </p>
                <p class="text-left body">
                  Notre rôle sera de faciliter l’organisation d’un groupe
                  moteur, de les aider à clarifier sa stratégie et à démarrer
                  son plan d’action pour mettre en place des projets collectifs,
                  toujours en réponse à leurs besoins.
                </p>

                <p class="text-left body">Notre méthodologie en 5 étapes :</p>
              </v-col>
            </v-row>
            <v-row class="mt-5 justify-center">
              <v-col cols="12" md="12">
                <v-row class="d-inline-flex justify-center">
                  <v-col cols="12" md="3">
                    <div>
                      <v-img
                        class="d-inline-flex"
                        height="100"
                        width="100"
                        :src="require('@/assets/img/1-1.png')"
                        :lazy-src="require('@/assets/img/1-1.png')"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <p class="title text-center">
                        Auto-diagnostic de la copropriété par un groupe référent
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div>
                      <v-img
                        class="d-inline-flex w"
                        height="100"
                        width="100"
                        :src="require('@/assets/img/1-5.png')"
                        :lazy-src="require('@/assets/img/1-5.png')"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <p class="title text-center">
                        Vidéo-panorama des témoignages d’habitant·e·s
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div>
                      <v-img
                        class="d-inline-flex w"
                        height="100"
                        width="100"
                        :src="require('@/assets/img/1-3.png')"
                        :lazy-src="require('@/assets/img/1-3.png')"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <p class="title text-center">Discussion collective</p>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div>
                      <v-img
                        class="d-inline-flex w"
                        height="100"
                        width="100"
                        :src="require('@/assets/img/1-4.png')"
                        :lazy-src="require('@/assets/img/1-4.png')"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <p class="title text-center">
                        Co-construction d’un plan d’amélioration de la
                        copropriété
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div>
                      <v-img
                        class="d-inline-flex"
                        height="100"
                        width="100"
                        :src="require('@/assets/img/1-2.png')"
                        :lazy-src="require('@/assets/img/1-2.png')"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <p class="title text-center">
                        Accompagnement d’un petit (ou grand) projet
                        d’amélioration
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider class="ma-4 primary"></v-divider>
      </section>
      <section>
        <v-row class="justify-center">
          <v-col sm="8" cols="12">
            <v-row class="justify-center align-center">
              <v-col cols="9">
                <h1 class="mb-5 text-left titre headline primary--text">
                  2⦁ Facilitation de l’entraide entre copropriétés
                </h1>
                <p class="text-left body-1">
                  Il est essentiel pour nous d’agir aussi à une échelle plus
                  large, à l’échelle d’un territoire, pour favoriser le lien et
                  la solidarité entre les habitant·e·s.
                </p>
                <p class="text-left body-1">
                  C’est une manière de valoriser les initiatives inspirantes
                  ainsi que de promouvoir l’échange et la construction de
                  savoirs et pratiques nouvelles entre pairs.
                </p>
              </v-col>
              <v-col
                order="first"
                order-md="last"
                order-sm="first"
                cols="10"
                sm="10"
                md="3"
              >
                <v-img
                  height="150"
                  class="w"
                  width="150"
                  aspect-ratio="1"
                  :src="require('@/assets/img/2.png')"
                  :lazy-src="require('@/assets/img/2.png')"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>

            <v-row class="mt-5 justify-center">
              <v-col cols="12">
                <v-row class="d-inline-flex justify-center">
                  <v-col cols="12" md="3">
                    <div>
                      <v-img
                        class="d-inline-flex w"
                        height="100"
                        width="100"
                        :src="require('@/assets/img/2-1.png')"
                        :lazy-src="require('@/assets/img/2-1.png')"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <p class="title text-center">
                        Ateliers d’échange entre copropriétés
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div>
                      <v-img
                        class="d-inline-flex w"
                        height="100"
                        width="100"
                        :src="require('@/assets/img/2-2.png')"
                        :lazy-src="require('@/assets/img/2-2.png')"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <p class="title text-center">
                        Vidéos pépites de pratiques inspirantes
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div>
                      <v-img
                        class="d-inline-flex w"
                        height="100"
                        width="100"
                        :src="require('@/assets/img/2-3.png')"
                        :lazy-src="require('@/assets/img/2-3.png')"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <p class="title text-center">
                        Mentorat entre copropriétaires
                      </p>
                    </div>
                  </v-col>

                  <v-col cols="12" md="3">
                    <div>
                      <v-img
                        class="d-inline-flex w"
                        height="100"
                        width="100"
                        :src="require('@/assets/img/2-4.png')"
                        :lazy-src="require('@/assets/img/2-4.png')"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <p class="title text-center">
                        Ateliers de co-construction de nos méthodologies
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </section>

      <section class="bg-action2">
        <v-divider class="ma-4 primary"></v-divider>
        <v-row class="justify-center">
          <v-col cols="12" md="8" sm="10">
            <v-row class="justify-center align-center">
              <v-col cols="10" sm="10" md="3">
                <v-img
                  class="w"
                  height="150"
                  width="150"
                  aspect-ratio="1"
                  :src="require('@/assets/img/3.png')"
                  :lazy-src="require('@/assets/img/3.png')"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
              <v-col cols="9">
                <h1 class="mb-5 text-left titre headline primary--text">
                  3⦁ Expertise
                </h1>
                <p class="text-left body-1">
                  Mais nous ne nous arrêtons pas à l’échelle du territoire non
                  plus !
                </p>
                <p class="text-left body-1">
                  Notre ambition est de contribuer aussi au développement de la
                  réflexion et de l'innovation dans le monde de l'habitat.
                </p>
              </v-col>
            </v-row>
            <v-row class="mt-5 justify-center">
              <v-col cols="12">
                <v-row class="d-inline-flex justify-center">
                  <v-col cols="12" md="4">
                    <div>
                      <v-img
                        class="d-inline-flex w"
                        height="100"
                        width="100"
                        :src="require('@/assets/img/3-1.png')"
                        :lazy-src="require('@/assets/img/3-1.png')"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <p class="title text-center">Recherche – Action</p>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div>
                      <v-img
                        class="d-inline-flex w"
                        height="100"
                        width="100"
                        :src="require('@/assets/img/3-2.png')"
                        :lazy-src="require('@/assets/img/3-2.png')"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <p class="title text-center">
                        Transmission aux professionnels de l’habitat
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div>
                      <v-img
                        class="d-inline-flex w"
                        height="100"
                        width="100"
                        :src="require('@/assets/img/3-3.png')"
                        :lazy-src="require('@/assets/img/3-3.png')"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <p class="title text-center">Plaidoyer</p>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <a
                href="https://drive.google.com/file/d/12b3FqLC62prNlMmAIUcy8tjGSwkaxoaz/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-btn class="ma-5" color="primary"
                  >Télécharger notre Catalogue d'activités</v-btn
                >
              </a>
            </v-row>
          </v-col>
        </v-row>
        <v-divider class="ma-4 primary"></v-divider>
      </section>
      <v-row class="justify-center align-center">
        <v-col cols="12">
          <h1 class="headline primary--text">L'IMPACT SOCIAL</h1>
        </v-col>
      </v-row>
      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <h2 class="text-left my-5 titre headline primary--text">
            Connaître l'impact social et systémique de nos actions:
          </h2>

          <p class="text-left body-1">
            Pour nous, l’habitat est un laboratoire de transformation sociale
            vers une société plus collaborative, inclusive et investie. Dans
            cette optique, nous souhaitons porter une forte attention à l’étude
            de l’impact social et systémique de nos interventions. Ainsi nous
            espérons pouvoir à la fois valoriser les actions que nous menons et
            leurs effets. Et aussi les repenser, les ajuster et les améliorer
            dans le but d’élargir leur impact.
          </p>
          <p class="text-left body-1">
            Dans les années à venir, nous allons intervenir auprès d’une masse
            critique de copropriété sur plusieurs territoires métropolitains. En
            profitant de cette chance, nous avons créé un groupe de travail
            multidisciplinaire qui développe une stratégie d’évaluation de
            l’impact social de ces interventions.
          </p>

          <p class="text-left body-1">
            Notre objectif est de porter une analyse des dynamiques collectives
            en copropriété, s’appuyant sur les sciences politiques, la
            sociologie et la psychologie sociale:
          </p>

          <ul>
            <li class="text-left body-1 my-2">
              ⦁ Comment ces dynamiques sociales se structurent en copropriété de
              façon classique ?
            </li>
            <li class="text-left body-1 my-2">
              ⦁ Quels impacts nous avons sur elles lorsque nous intervenons et
              selon nos interventions ?
            </li>
            <li class="text-left body-1 my-2">
              ⦁ Quelle prise en compte par les acteurs avec lesquels nous
              intervenons auprès d’eux (copropriétaires, locataires, syndics,
              opérateurs, pouvoirs publics, etc.) et suite à notre intervention,
              comment se redéfinit le jeux d’acteurs (les rôles, les
              dominations, etc.) ?
            </li>
          </ul>
        </v-col>
      </v-row>

      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <h2 class="text-left my-5 titre headline primary--text">
            Notre posture : une démarche inspirée de l’éducation populaire
          </h2>

          <p class="text-left body-1">
            Au sein de L’Echappée des copropriétés, nous sommes en constant
            questionnement et évolution pour construire notre posture
            d’animation et de facilitation. Nous nous inscrivons dans une
            démarche
            <b>
              d’éducation populaire. Nous souhaitons accompagner la production
              de savoirs afin de comprendre le monde pour le transformer,
              toujours en nous raccrochant au réel, au vécu.
            </b>
          </p>
          <p class="text-left body-1">
            Cette vision se reflète dans notre méthodologie, qui accorde une
            place centrale à la parole et l’expérience des habitant·e·s. C’est
            pourquoi dans nos ateliers, nous mettons en place un cadre
            favorisant le dialogue et l’échange entre pairs, ainsi que le
            questionnement sur leurs pratiques. Cela afin de susciter la prise
            du recul qui donne lieu, bien souvent, à la prise de conscience,
            l’apprentissage et l’évolution.
          </p>
          <p class="text-left body-1">
            Nous capturons aussi les expériences des habitant·e·s, notamment
            grâce à nos vidéos pépites, afin de nous en servir comme base de
            toute notre production pédagogique et intellectuelle. Que ce soit
            pour la conception des déroulés des ateliers d’échange, pour nourrir
            la recherche – action, ou pour la création du contenu de nos
            formations, nous nous appuyons toujours dans les histoires et
            réflexions de copropriétaires et locataires.
          </p>
          <p class="text-left body-1">
            Notre aspiration est de promouvoir l’émancipation et la capacité
            d’agir des habitant·e·s de copropriété, en proposant des espaces
            permettant la conscientisation de leurs besoins, de leurs ressources
            et de leurs droits. Cela s’inscrit dans la vision de l’Échappée des
            copropriétés de
            <b>
              l’habitat collectif qui est considéré comme un laboratoire de
              transformation social vers une société plus collaborative,
              inclusive et investie.
            </b>
          </p>
        </v-col>
      </v-row>
      <v-row class="align-center my-5 d-flex justify-center">
        <v-col cols="12" md="6">
          <nuxt-link to="/blog">
            <v-btn class="ma-5" color="primary">Voir le blog</v-btn></nuxt-link
          >
        </v-col>
        <v-col cols="12" md="6">
          <nuxt-link to="/videotheque">
            <v-btn class="ma-5" color="primary"
              >Voir la vidéothèque</v-btn
            ></nuxt-link
          >
        </v-col>
      </v-row>

      <v-row class="align-center d-flex justify-center">
        <v-col cols="12">
          <nuxt-link to="/">
            <v-btn class="ma-5 button" color="primary"
              >Retour à l'accueil</v-btn
            ></nuxt-link>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Nos Activités',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    }
  },
}
</script>

<style></style>
