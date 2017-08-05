## 1.创建数据库

`CREATE DATABASE name`

`CREATE DATABASE name DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci`

创建数据库并且设置排序规则

***

删除数据库 `DROP DATABASE name`

 ## 2.创建/删除表

```
CREATE TABLE name
(
    id int auto_increment primary key,
    name varchar(20),
    class varchar(20)
);
```

注：自增长代码代表：auto_increment

　　主建的代码代表：primary key

​      	是否为空: 不为空的代码：not null

代码写创建数据库是注意：

1.类型包含长度的，在类型后面加(括号)，括号里面写长度

2.上一列写完加逗号

3.最后一列不要写逗号

4.在每一条SQL语句写完之后要加分号;

***

删除表`DROP TABLE name`

## 3.查询数据库

#### 1.查找所有数据

`SELECT * FROM user`
举个栗子:查找年龄不等于18的
`SELECT * FROM user WHERE age != 18`
`SELECT * FROM user WHERE age <> 18`

#### 2.模糊查询

1.查找user表中 name以马开头的所有数据
`SELECT * FROM user WHERE name like "马%"`
2.查找user表中 name以马结尾的所有数据
`SELECT * FROM user WHERE name like "%马"`

#### 3.精确查找

查找user表中 name包含"文"的所有数据
`SELECT * FROM user WHERE name like "%文%"`

#### 4.查找字段

查找表中所有 name age字段
`SELECT name,age FROM user`

#### 5.limit查找

从第二个字段开始查找3个(默认从0开始)
`SELECT * FROM user LIMIT 2,3`

#### 6.排序

1.按照年龄排序(数字) 默认升序

`SELECT * FROM user ORDER BY age DESC (降序)`
`SELECT * FROM user ORDER BY age ASC (升序)`

2.让汉字按照拼音顺序排列
`SELECT * FROM user ORDER BY convert(name using gbk)`

## 4.插入数据

1.插入

`INSERT INTO 表名(字段A,字段B...)VALUES(值1,值2...)`

2.插入多条

插入多条数据
`INSERT INTO user(name,age,sex) VALUES("赛琳娜",8,"女"),("房灰缝",18,"男")`

## 5.删除数据

`DELETE FROM 表名 WHERE 条件`

全部删除:删除表中所有的数据,但是表还在`DELETE FROM user`

同时满足两个条件 使用关键字 AND连接`DELETE FROM user WHERE sex = "女" AND age > 8`

## 6.修改数据

`UPDATE 表名 SET 字段1 = 值1 , 字段2 = 值2,........WHERE 条件`

**注意:不添加条件 ,改变整张表中所有对应字段的值**



