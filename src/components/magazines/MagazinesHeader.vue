<template>
  <header class="magazines-header">
    <h1 class="magazines-header__title">Czasopisma</h1>
    <p class="magazines-header__description">
      Mamy przyjemność oddać w Państwa ręce kolejny numer „Kazusu Podatkowego", który tym razem
      poświęcony jest w dużej części zmianom w podatkach w roku 2019.
    </p>
    <p class="magazines-header__subtitle">
      Omówiliśmy najważniejsze zagadnienia takie jak zmiany w zakresie rozliczania kosztów używania
      samochodów osobowych, wprowadzenie „exit tax" czy zmiany dotyczące poboru podatku u źródła na
      gruncie podatków dochodowych, poświęcając im odrębne artykuły.
    </p>
  </header>
</template>

<style lang="scss" scoped>
  .magazines-header {
    color: v.$color-white;
    max-width: 600px;

    &__title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: v.$spacing-lg;
    }

    &__description {
      font-size: v.$font-size-lg;
      margin-bottom: v.$spacing-base;
    }

    &__subtitle {
      font-size: v.$font-size-md;
      opacity: 0.8;
    }
  }
</style>
