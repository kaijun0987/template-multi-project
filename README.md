How to start template project
1. pnpm template


How to create a new sub project 
1. 复制 projects/template 文件夹。
2. 改名为 project-02。
3. 修改 project-02/package.json 里的 "name": "@lab/project-02"。
4. 在根目录执行 pnpm install。
5. 在跟目录的 package.json script 复制 "template": "pnpm --filter @lab/template dev"
6. 改成 "p2": "pnpm --filter @lab/project-02 dev", 
7. 运行 pnpm p2 即可。
