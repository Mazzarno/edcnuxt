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
          <h1 class="headline my-5 primary--text">QUI SOMMES-NOUS ?</h1>
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
                :src="require('@/assets/img/totem2.jpg')"
                :lazy-src="require('@/assets/img/totem2.jpg')"
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
                L’aventure commence en 2017 par un tour d’Europe à vélo sur le
                chemin de pratiques inspirantes en copropriété.
              </p>
              <p class="text-left body-1">
                De cette expérience, des vidéos-pépites sont ramenées en France,
                où les habitant.e.s partagent leurs initiatives de sa propre
                voix.
              </p>
              <p class="text-left body-1">
                Ces vidéos, cette parole brute, fut la première graine d’un
                projet qui grandit grâce à l’implication et à l’accueil du
                collectif qui compose aujourd’hui le véritable peloton de
                l’Échappée des copropriétés.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="ma-4 primary"></v-divider>
      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <h1 class="text-left my-5 headline titre primary--text">
            Le début de l'aventure à vélo
          </h1>
          <p class="text-left body-1">
            L’association l’Échappée des Copropriétés est née de « l’Échappée
            des Copropriétés en roue libre », un projet autofinancé et mené par
            Manon LEROY durant l’été 2017. Après quatre années à suivre des
            copropriétaires avec l'Association des Responsables de Copropriété
            (ARC), elle constate des manques dans les politiques publiques, la
            loi et l’accompagnement des copropriétés.
          </p>
          <p class="text-left body-1">
            Notamment, les dynamiques collectives, ainsi que la parole directe
            des habitant·e·s, qui étaient peu prises en compte dans la
            conception des dispositifs d’accompagnement des copropriétaires,
            public ou associatifs.
          </p>
          <p class="text-left body-1">
            C'est ainsi qu'elle décide de partir 3 mois à vélo pour collecter
            des témoignages vidéo d’habitant·e·s présentant des pratiques
            inspirantes en termes d’organisation, de convivialité, de partage en
            copropriété. À son retour, elle projette ses vidéos lors de
            rassemblements entre copropriétaires et constate qu'elles agissent
            comme des simulateurs d'échanges, mais aussi qu’elles constituent un
            moyen pour lever les blocages qui empêchent la communication.
          </p>
          <p class="text-left body-1">
            Enfin, grâce au soutien et bons conseils de Toulouse Métropole et de
            la Fondation Abbé Pierre, Manon monte l’association l’Échappée des
            copropriétés en août 2018 et commence à fédérer un collectif de
            membres engagé·e·s pour un changement d’approche dans le monde de la
            copropriété.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5 d-flex justify-center">
        <v-col cols="8">
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
        </v-col>
      </v-row>
      <v-row class="align-center d-flex justify-center">
        <v-col cols="12">
          <nuxt-link to="/videotheque">
            <v-btn class="mb-5" color="primary"
              >Découvrez le projet en roue libre</v-btn
            ></nuxt-link
          >
        </v-col>
      </v-row>

      <v-divider class="ma-4 primary"></v-divider>

      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <h1 class="text-left my-5 headline titre primary--text">
            La structuration autour de trois compétences complémentaires
          </h1>

          <p class="text-left body-1">
            L'organisation de L'Échappée des copropriétés témoigne de notre
            volonté d'amener dans le monde de la copropriété des pratiques
            issues d'autres horizons.
          </p>
          <p class="text-left body-1">
            Notre équipe se structure en effet autour de trois compétences:
          </p>

          <ul>
            <li class="text-left body-1 my-2">
              ⦁ Une expertise sur la copropriété, sur les aspects de gestion,
              juridique et financier.
            </li>
            <li class="text-left body-1 my-2">
              ⦁ L’expérience et la connaissance de la posture de facilitation,
              d’éducation populaire.
            </li>
            <li class="text-left body-1 my-2">
              ⦁ La création de supports multimédia à partir de la parole
              habitante (vidéo, podcast, etc.)
            </li>
          </ul>
        </v-col>
      </v-row>

      <v-divider class="ma-4 primary"></v-divider>

      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <h1 class="text-left my-5 headline titre primary--text">
            Nos membres : un collectif qui réfléchit et co-construit ensemble
          </h1>
          <p class="text-left body-1">
            L’Échappée des Copropriétés est composée de membres bénévoles,
            venant du milieu de l’habitat, de l’éducation populaire et de
            copropriétaires ou locataires souhaitant réfléchir à l’amélioration
            du cadre de vie des copropriétés avec nous.
          </p>
          <p class="text-left body-1">
            Nous organisons des ateliers de réflexions (stratégie de
            l’association) et des ateliers de co-construction (créer des outils
            et des méthodes pour aider les copropriétés à résoudre un problème)
            trimestriellement pour construire les pratiques de l’Échappée des
            Copropriétés.
          </p>
          <p class="text-left body-1">
            Les membres sont également invité·e·s à intervenir avec nous auprès
            de copropriétés accompagnées, dans le cadre de co-animation
            d’ateliers d’échanges ou en mentorat avec d’autres copropriétés par
            exemple.
          </p>
        </v-col>
      </v-row>

      <v-row class="mt-5 d-flex justify-center">
        <v-col cols="8">
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
        </v-col>
      </v-row>

      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <h1 class="text-left headline titre primary--text">
            L’équipe aujourd’hui
          </h1>
          <h2 class="text-left my-5 headline primary--text">
            Manon LEROY – Fondatrice et directrice
          </h2>
          <p class="text-left body-1">
            Passionnée des enjeux sociologiques et d’organisation collective
            liés à l’entretien du parc privé collectif, Manon se charge du volet
            recherche-action pour développer, avec des chercheurs·euses, des
            praticien·ne·s mais aussi des habitant·e·s, des projets explorant de
            nouvelles façons de favoriser l’amélioration du cadre de vie des
            copropriétés.
          </p>
          <p class="text-left body-1">
            Elle continue à utiliser l’outil vidéo pour valoriser la parole,
            stimuler les échanges et diffuser largement. Depuis 2018, elle
            intervient à Sciences Po Toulouse dans le cadre de travaux dirigés
            de Master 2 sur la Ville durable.
          </p>

          <h2 class="text-left my-5 headline primary--text">
            Camille DÉRIOT – Référente copropriété. Île de France.
          </h2>
          <p class="text-left body-1">
            Experte des dispositifs publics à destination des copropriétés
            fragiles et en difficulté ainsi que de l’accompagnement au
            redressement financier et de gestion, Camille est la référente de
            l’Échappée des copropriétés en Ile-de-France. Son expérience dans
            l’accompagnement des copropriétés depuis 2011 l’a convaincue de la
            nécessité d’accompagner différemment les coproprié­tés en
            coconstruisant avec les habitant·e·s les dispositifs dont ils·elles
            bénéficient.
          </p>
          <p class="text-left body-1">
            Elle se forme également aux outils de la facilitation afin de faire
            évoluer sa posture professionnelle.
          </p>

          <h2 class="text-left my-5 headline primary--text">
            Belén FERNÁNDEZ DEL RINCÓN – Référente Facilitation. Occitanie.
          </h2>
          <p class="text-left body-1">
            Facilitatrice des processus de groupe, elle est responsable du volet
            animation au sein de l’Échappée des copropriétés. Inscrite dans une
            démarche d’éduca­tion populaire depuis 2016, elle met l’accent sur
            l’émancipation et la construc­tion collective à travers une posture
            de facilitation qui priorise la parole des participant·e·s comme
            ressource d’apprentissage.
          </p>
          <p class="text-left body-1">
            Elle se forme depuis 2018 à la Communication Non Violente, s’en
            servant pour créer des cadres sécurisants et de confiance, stimuler
            la participation et l’échange respectueux, et appro­cher les
            conflits de façon constructive.
          </p>

          <h2 class="text-left headline my-5 primary--text">
            Les Collecteurs de parole
          </h2>
          <p class="text-left body-1">
            Volontaires en Service Civique au sein de l’Échappée des
            copropriétés, les collecteurs de parole prennent le relai sur la
            partie vidéo de l’association. Ils mettent leur motivation et
            intérêts au service de la collecte et de la mise en valeur de la
            parole des habitant.e.s.
          </p>
          <p class="text-left body-1">
            Ils profitent également de cette expérience pour s’ouvrir à de
            nouvelles pratiques de communication, découvrir le monde des
            copropriétés et développer leurs compétences techniques (captation
            et montage vidéo et sonore).
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
            ></nuxt-link
          >
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Qui sommes nous ?',
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