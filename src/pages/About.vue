<template>
  <Layout>
    <main class="main">
      <Logo class="logo-bg"/>
      <div class="about-cont">
        <div class="cover-image-cont">
        <g-image alt="A photograph of Josh" 
                :src="$page.allAbout.edges[0].node.cover_image"
                class="cover-image"/>
        </div>
        <div class="info-cont">
          <h1 class="title">{{ $page.allAbout.edges[0].node.name }}</h1>
          <p class="bio">{{ $page.allAbout.edges[0].node.bio }}</p>
          <ul class="social-links">
            <li v-for="social of $page.allAbout.edges[0].node.social_links" 
                :key="social.link"
                class="social-li">
                <g-link :to="social.link" class="social-link link">{{ social.platform }}</g-link>
            </li>
          </ul>
          <listening-to api_key="c49513b422b272720a73dc8c4c4d398d" 
                        user="theteacat"
                        refresh_rate="30000"
                        class="listening-to"/>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query {
  allAbout {
    edges {
      node {
        name
        cover_image(quality:90)
        bio
        social_links {
          link
          platform
        }
      }
    }
  }
  metadata {
    siteName
  }
}
</page-query>

<script>
import ListeningTo from '../components/ListeningTo.vue'
import Logo from "~/assets/svgs/logo.svg"

export default {
  metaInfo() {
    return {
      ...this.$ogp({
        title: "About",
        description: this.$page.allAbout.edges[0].node.bio,
        image: 'https://joshuarainbow.co.uk' + this.$page.allAbout.edges[0].node.cover_image.src,
      })
    }
  },
  components: {
    ListeningTo,
    Logo
  }
}
</script>

<style lang="scss" scoped>
.main {
  flex-grow:1;
  display:flex;
  align-items: center;

  .logo-bg {
    position:absolute;
    z-index:-2;
    top:0;left:0;
    width:100%;height:100%;
    filter:contrast(0.2) brightness(1.8);
  }

  .about-cont {
    width:100%;
    max-height:100%;

    padding: $spacer*4;

    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:row;    
    @media(max-width:$breakpoint-1-width) {
      flex-direction:column;
      .info-cont {
        margin-top: $spacer*4;
      }
    }

    .cover-image-cont {
      width:fit-content;
      .cover-image {
        max-width:100%;
        max-height:60vh;
      }
    }

    .info-cont {
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      max-width:500px;

      margin-left: $spacer*12;
      @media(max-width:$breakpoint-1-width){
        margin-left:0;
        margin-top: $spacer*8;
        width:100%;
      }

      .title {
        text-align: center;
        @include serifBoldItalicLarge();
      }

      .bio {
        margin: $spacer*2 0;
        margin-bottom: $spacer*3;
        padding: $spacer*3 0;

        border-top: $border-style;
        border-bottom: $border-style;

        text-align: center;
      }

      .social-links {
        padding-bottom:$spacer*2;

        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap:wrap;
        
        .social-li {
          padding: 0 $spacer*2;
          .social-link {
            @include sansItalic();
          }
        }
      }
      .listening-to {
        width:100%;
        padding-top:$spacer*2;
        border-top: $border-style;
      }
    }
  }
}
</style>