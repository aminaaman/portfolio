<template>
    <div class="vue">
        <h2>
            VueJs Framework
        </h2>
        <br>
        <b-card bg-variant="light" text-variant="black" title="Что это?">
            <b-card-text>
                Это прогрессивный JavaScript фреймворк с открытым исходным кодом, предназначенный для разработки пользовательского интерфейса. 
                Он является одним из самых популярных фреймворков для упрощения веб-разработки. VueJS работает в основном с уровнем представления. 
                Его с лёгкостью можно интегрировать в большие проекты для фронт-енд разработки. Устанавливается VueJS очень просто. Для разработчика 
                разобраться в нем и начать создавать пользовательские веб-интерфейсы – это всего лишь вопрос небольшого времени. Создателем VueJS является 
                Эван Ю (Evan You), бывший сотрудник Google. Релиз первой версии VueJS состоялся в феврале 2014. Недавно количество его звёзд на GitHub 
                достигло 64828, что говорит о чрезвычайной популярности VueJS.

            </b-card-text>
            <b-button href="https://vuejs.org/v2/guide/" variant="primary">Документация VueJS</b-button>
        </b-card>
        <br>
        <div>
            <div>
                <b-card-group deck>
                <b-card bg-variant="primary" text-variant="white" header="Компоненты" class="text-center">
                    <b-card-text>
                        Компоненты – это очень важная функция VueJS, помогающая создать пользовательскме элементы, которые можно повторно использовать в HTML.
                    </b-card-text>
                </b-card>

                <b-card bg-variant="secondary" text-variant="white" header="Управление событиями" class="text-center">
                    <b-card-text>
                        v-on – это атрибут, который добавляется к элементам DOM, чтобы прослушивать события в VueJS.
                    </b-card-text>
                </b-card>       
                <b-card bg-variant="success" text-variant="white" header="Директивы" class="text-center">
                    <b-card-text>
                        VueJS имеет такие встроенные директивы как v-if, v-else, v-show, v-on, v-bind и v-model, 
                        которые используются для выполнения различных действий во фронт-енд.
                    </b-card-text>
                </b-card>
                </b-card-group>
            </div>
            <div class="mt-3">
                <b-card-group deck>
                <b-card bg-variant="info" text-variant="white" header="Вычисляемые свойства" class="text-center">
                    <b-card-text>
                        Это следующая важная функция VueJS. Она помогает прослушивать изменения, внесённые в элементы UI, и выполняет необходимые вычисления. Для этого нам не нужно писать дополнительный код.
                    </b-card-text>
                </b-card>

                <b-card bg-variant="warning" text-variant="white" header="Шаблоны" class="text-center">
                    <b-card-text>
                        VueJS представляет шаблоны, основанные на HTML, которые связывают DOM с данными экземпляра Vue. 
                        Vue компилирует шаблоны в функции Render виртуального DOM. 
                        Вы можете использовать шаблон функций Render, для этого нужно заменить шаблон render-функцией.
                    </b-card-text>
                </b-card>

                <b-card bg-variant="danger" text-variant="white" header="Маршрутизация" class="text-center">
                    <b-card-text>Навигация между страницами выполняется с помощью vue-router.</b-card-text>
                </b-card>
                </b-card-group>
            </div>

        </div>
        <br>
        <b-card bg-variant="light" text-variant="black" title="Реактивность в VueJS">
            <b-card-text>
                Одна из наиболее примечательных возможностей Vue — это ненавязчивая реактивность. Модели представляют собой простые 
                JavaScript-объекты. По мере их изменения обновляется и представление данных, благодаря чему управление состоянием 
                приложения становится простым и очевидным. Для наглядного примера такой реактивности Vue.js можно привести нижеследующий код.
                В этом примере первоначально в шаблоне генерируется вывод текста “Hello World”.
                Затем по истечении 2 секунд текст в шаблоне меняется на “Goodbye World”:
            </b-card-text>
            <img src="@/assets/screen.jpg" alt="">
            <b-card-text>
                В приведенном выше примере ключ message объекта data является реактивным.
                Это означает, что при любом изменении значения ключа message происходит автоматическое изменение 
                выводимого значения в шаблоне.
            </b-card-text>
        </b-card>

    </div>
</template>

<style scoped>
    .vue{
        margin-top: 25px;

    }
</style>