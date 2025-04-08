.flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.container {
    display: flex;
    justify-content: space-between;  /* или другое значение для корректного распределения */
}

nav {
    flex-grow: 1;
}
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.gallery figure {
    flex: 1 1 200px;  /* Гибкая ширина, минимум 200px */
}

.gallery img {
    width: 100%;  /* Изображение будет растягиваться по ширине контейнера */
    height: auto;
}