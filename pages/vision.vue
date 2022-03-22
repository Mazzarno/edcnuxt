<template>
  <div fluid fill-height>
    <section>
      <v-img>
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
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
          <h1 class="headline my-5 primary--text">NOTRE VISION</h1>
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
                :src="require('@/assets/img/totem3.jpg')"
                :lazy-src="require('@/assets/img/totem3.jpg')"
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
                Nous souhaitons voir l’émergence de copropriétés où il fait bon
                vivre ensemble. Nous aspirons à l’amélioration des conditions de
                vie dans les copropriétés, pour et par l’implication des
                habitant·e·s. Des dynamiques collectives sont impulsées dans un
                climat d’écoute de toutes les voix pour partager espaces,
                équipements et moments de vie au sein des immeubles, et en
                solidarité avec d’autres immeubles.
              </p>
              <p class="text-left body-1">
                Nous souhaitons voir émerger une communication fluide entre
                habitant·e·s, décideurs et opérateurs pour construire des
                politiques et dispositifs publics d’aide de façon ascendante.
                <b
                  >Pour nous, l’habitat est un laboratoire de transformation
                  sociale vers une société plus collaborative, inclusive et
                  investie.</b
                >
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <section class="bg-action2">
        <v-divider class="ma-4 primary"></v-divider>
        <v-row class="justify-center align-center">
          <v-col cols="12">
            <h1 class="headline primary--text">
              COMMENT ATTEINDRE CETTE VISION :
            </h1>
          </v-col>
        </v-row>
        <v-row class="align-center d-flex justify-center">
          <v-col cols="12" md="8" sm="10">
            <v-row class="justify-center align-center">
              <v-col cols="10" sm="10" md="3">
                <v-img
                  height="150"
                  width="150"
                  aspect-ratio="1"
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

              <v-col cols="9">
                <h1 class="mb-5 text-left titre headline primary--text">
                  À l’échelle d’une copropriété
                </h1>

                <ul>
                  <li class="text-left body-1 my-2">
                    ⦁ Créer des espaces d’expression, de dialogue et d’écoute
                    pour construire un projet collectif partagé
                  </li>
                  <li class="text-left body-1 my-2">
                    ⦁ Faire émerger des groupes moteurs pour encourager la mise
                    en action
                  </li>
                  <li class="text-left body-1 my-2">
                    ⦁ Faire remonter les envies et les besoins de tous les
                    locataires et coproprié­taires, en portant une attention à
                    la voix des habitant.e.s peu entendu·e·s
                  </li>
                  <li class="text-left body-1 my-2">
                    ⦁ Mobiliser les différentes parties prenantes et créer des
                    liens de confiance entre les habitant·e·s et les
                    copropriétaires, avec les acteurs
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider class="ma-4 primary"></v-divider>
      </section>
      <v-row class="align-center d-flex justify-center">
        <v-col cols="12" md="8" sm="10">
          <v-row class="justify-center align-center">
            <v-col cols="10" sm="10" md="3">
              <v-img
                height="150"
                width="150"
                aspect-ratio="1"
                :src="require('@/assets/img/totem7.jpg')"
                :lazy-src="require('@/assets/img/totem7.jpg')"
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
              <h1 class="my-5 text-left titre headline primary--text">
                À l’échelle d’un territoire
              </h1>

              <ul>
                <li class="text-left body-1 my-2">
                  ⦁ Animer les relations inter-copropriété en créant des espaces
                  de rencontre et l’entraide
                </li>
                <li class="text-left body-1 my-2">
                  ⦁ Relier les immeubles pour sortir du sentiment de
                  découragement et d’isolement
                </li>
                <li class="text-left body-1 my-2">
                  ⦁ Aider à prévenir et à sortir des situations de difficulté en
                  prenant du recul
                </li>

                <li class="text-left body-1 my-2">
                  ⦁ Inspirer et s’inspirer entre copropriétés pour faire émerger
                  des envies et impulser la mise en action
                </li>
                <li class="text-left body-1 my-2">
                  ⦁ Valoriser les habitant·e·s et leur expertise
                </li>
                <li class="text-left body-1 my-2">
                  ⦁ Co-construire des savoirs et des nouvelles pratiques
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <section class="bg-action2">
        <v-divider class="ma-4 primary"></v-divider>
        <v-row class="align-center d-flex justify-center">
          <v-col cols="12" md="8" sm="10">
            <v-row class="justify-center align-center">
              <v-col cols="10" sm="10" md="3">
                <v-img
                  height="150"
                  width="150"
                  aspect-ratio="1"
                  :src="require('@/assets/img/totem3.jpg')"
                  :lazy-src="require('@/assets/img/totem3.jpg')"
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
                <h1 class="my-5 text-left titre headline primary--text">
                  À l’échelle de l’écosystème de l’habitat privé
                </h1>

                <ul>
                  <li class="text-left body-1 my-2">
                    ⦁ Diffuser amplement et transmettre les savoirs et outils
                    construits sur nos terrains d’accompagnement et avec les
                    habitant·e.s
                  </li>
                  <li class="text-left body-1 my-2">
                    ⦁ Animer un réseau d’acteurs à l’échelle locale ou nationale
                  </li>
                  <li class="text-left body-1 my-2">
                    ⦁ Co-construire de nouvelles pratiques d’accompagnement à
                    partir de la voix des habitant·e·s
                  </li>

                  <li class="text-left body-1 my-2">
                    ⦁ Créer de la confiance autour de la parole d’habitant·e·s
                    constitutive d’expertise
                  </li>
                  <li class="text-left body-1 my-2">
                    ⦁ Interpeller et conseiller les parties prenantes
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider class="ma-4 primary"></v-divider>
      </section>

      <v-row class="justify-center align-center">
        <v-col cols="12">
          <h1 class="headline primary--text">POURQUOI AGISSONS-NOUS ?</h1>
        </v-col>
      </v-row>
      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <p class="text-left body-1">
            Nous pensons que la situation des copropriétés devient problématique
            et qu’il y a urgence à travailler sur la collaboration et la parole
            des habitant·e·s pour les aider et globalement pour stimuler la
            transformation sociale.
          </p>
          <p class="text-left body-1">
            Les problématiques sur lesquelles nous aspirons à agir :
          </p>
        </v-col>
      </v-row>
      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <h2 class="text-left my-5 headline titre primary--text">
            ⦁ Les difficultés d’amélioration du cadre de vie dans les
            copropriétés
          </h2>
          <p class="text-left body-1">
            En copropriété, c'est l'assemblée générale qui doit voter toute
            amélioration du cadre de vie. De ce fait, il est indispensable qu'il
            y ait une convergence d’intérêts, qui naîtra seulement du partage
            d'idées et des débats entre les copropriétaires. Cependant, rien
            n’est prévu dans la loi de la copropriété qui motiverait les
            différents acteurs à se réunir et à créer ensemble un climat de
            confiance.
          </p>
          <p class="text-left body-1">
            Par ailleurs, la faible mobilisation des habitant·e·s, souvent liée
            également à cette absence d’un climat de confiance, fait que les
            copropriétaires, conseils syndicaux ou syndics bénévoles se
            retrouvent à devoir porter le collectif seul·e·s, isolés et en
            absence de moyens.
          </p>
        </v-col>
      </v-row>
      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <h2 class="text-left my-5 headline titre primary--text">
            ⦁ ... qui mènent à la dégradation du parc en France
          </h2>
          <p class="text-left body-1">
            Les copropriétés fragiles et en difficulté sont celles qui
            rencontrent de graves difficultés sur le plan technique, social et
            financier. En ajoutant les difficultés d'organisation, cela forme
            une "spirale de dégradation". Ce phénomène touche 15 à 20% des
            copropriétés en France.
          </p>
          <p class="text-left body-1">
            Une des clés pour freiner cette "spirale de dégradation" est d’aider
            les habitants à améliorer leur organisation collective, ce qui leur
            permettra de mieux s’investir dans l’entretien de leur bien.
          </p>
        </v-col>
      </v-row>
      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <h2 class="text-left my-5 headline titre primary--text">
            ⦁ Une dimension collective à intégrer aux dispositifs publics d’aide
          </h2>
          <p class="text-left body-1">
            Il existe depuis les années 1990 des dispositifs d'aide pour
            l’amélioration du bâti en copropriété, mais ceux-ci ne prennent pas
            suffisamment en compte les dynamiques collectives, pourtant
            nécessaires au vote des travaux.
          </p>
          <p class="text-left body-1">
            Les copropriétaires étant décisionnaires, il faut intégrer une aide
            à l'organisation collective pour leur permettre de s'exprimer et
            d'être écoutés, créant ainsi les conditions propices à la
            convergence d’intérêts et au bon déroulement des projets d’entretien
            et amélioration des copropriétés.
          </p>
        </v-col>
      </v-row>
      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <h2 class="text-left my-5 titre headline primary--text">
            ⦁ Plus globalement une société qui a besoin de réhabiliter le
            collectif et ses ressources
          </h2>
          <p class="text-left body-1">
            À l’image d’une société, les copropriétés mettent en lumière la
            croyance d’un collectif uniquement source de nuisances et de
            contraintes.
          </p>

          <p class="text-left body-1">
            Devant la complexité de la gestion collective, il nous manque des
            outils de régulation et des expériences positives auxquelles nous
            pouvons nous associer, pour penser l’habitat collectif autrement.
          </p>
        </v-col>
      </v-row>

      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <h2 class="text-left my-5 headline primary--text">
            Pour connaître plus en détail notre projet associatif, téléchargez
            notre Business Plan Social, publié le 23 janvier 2020 :
          </h2>
        </v-col>
      </v-row>
      <v-row class="align-center d-flex justify-center">
        <v-col cols="12">
          <a
            href="https://drive.google.com/file/d/1jrYrqfUBhZPjzsQLhMItwL4GbVUeNxvE/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-btn class="ma-5 button" color="primary"
              >Télécharger notre BPS</v-btn
            >
          </a>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Notre Vision',
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

<style>
</style>