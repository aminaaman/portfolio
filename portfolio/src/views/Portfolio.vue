<template>
  <div>
    <br/>
    <h2>Portfolio page</h2>
    <b-card no-body class="overflow-hidden mx-auto" style="max-width: 540px;">
        <b-row no-gutters>
        <b-col md="6">
            <b-card-img src="https://pbs.twimg.com/profile_images/923119890675961857/_FWourTU_400x400.jpg" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
            <b-card-body title="Аман Амина Мураткызы">
            <b-card-text>
                Выпускница КБТУ по специальности Информационные 
                Системы. Frontend-разработчик
            </b-card-text>
            </b-card-body>
        </b-col>
        </b-row>
    </b-card>
    <br>
    <b-card-group deck class="row mx-md-n5">
        <b-card
            title="Aiplus"
            img-src="https://hh.kz/employer-logo/2871137.jpeg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            Преподаватель математики и логики (параллельно с очным обучением в ВУЗе)
            Подготовка школьников для поступления в НИШ, РФМШ, КТЛ. Разрабатывала учебные материалы по математике и логике.
            </b-card-text>
        </b-card>
        <b-card
            title="Alfa-Bank"
            img-src="https://hh.ru/employer-logo/3096625.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            SQL стажёр. Производственная практика. Преобрела опыт написания SQL запросов для разработки отчетов.
            </b-card-text>
        </b-card>
        <b-card
            title="One technologies"
            img-src="https://hh.kz/employer-logo/3031341.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            Обучение в рамках проекта One lab по направлению Frontend (Angular JS).            
            </b-card-text>
        </b-card>
        <b-card
            title="Codebusters"
            img-src="https://hh.kz/employer-logo/2510742.jpeg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            Frontend-стажёр, преддипломная практика: приобретение практических навыков при выполнении заданий в области Frontend-разработки (React JS).
            </b-card-text>
        </b-card>
        <b-card
            title="Startup PROFMentor"
            img-src="data:image/png;base64,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"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            Доработка Startup проекта PROFMentor. Улучшение фонта с расширением страниц и элементов. Reference: Нугусбаева Жансая +7 702 753 7741 
            </b-card-text>
        </b-card>
    </b-card-group>
    <br>
    <div>
        <b-card
            no-body
            style="max-width: 20rem;"
            img-src="https://www.kbtu.kz/images/88-b3a2c183b221a6f861fe6a0e1129c586.jpeg"
            img-alt="Image"
            img-top
            class="mx-auto position-relative"
        >
            <template v-slot:header>
            <h4 class="mb-0">Образование</h4>
            </template>

            <b-card-body>
            <b-card-title>Казахстанско-Британский технический университет</b-card-title>
            <b-card-sub-title class="mb-2">Факультет Информационных Технологий, Информационные системы</b-card-sub-title>
            <b-card-text>
                Диплом на тему «Разработка системы для контроля сдачи и проверки схожести работ». Работа
                будет использована преподавателями КБТУ на практике.
            </b-card-text>
            </b-card-body>

            <b-list-group flush>
            <b-list-group-item>Знание языков:Казахский (Родной); Русский (В совершенстве); Английский (C2 — В совершенстве); Турецкий (C2 — В совершенстве)</b-list-group-item>
            <b-list-group-item>Навыки:  HTML, JavaScript, CSS, ReactJS, AngularJS, Bootstrap, SQL, Github</b-list-group-item>
            </b-list-group>

            <b-card-body>
            <a href="https://github.com/aminaaman" class="card-link">Github</a>
            </b-card-body>
        </b-card>
    </div>

  </div>
</template>