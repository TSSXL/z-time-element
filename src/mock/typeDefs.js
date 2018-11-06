

let  typeDefs=`
# source: http://120.79.40.85:8080/graphql
# timestamp: Wed Jul 25 2018 13:33:11 GMT+0800 (中国标准时间)

schema {
  query: QueryType_JPA
  mutation: Mutation_SpringMVC
}

"""This directive allows results to be deferred during execution"""
directive @defer on FIELD

"""管理员"""
type Administ {
  """姓名"""
  name(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String
  id(orderBy: OrderByDirection): String

  """联系方式"""
  tel(orderBy: OrderByDirection): String

  """性别"""
  pwd(orderBy: OrderByDirection): String

  """客户等级"""
  level(orderBy: OrderByDirection): CustomerLevelEnum

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long

  """出生年月"""
  birthday(orderBy: OrderByDirection): String
}

"""管理员"""
input Administ_ {
  """姓名"""
  name: String
  number: String
  id: String

  """联系方式"""
  tel: String

  """性别"""
  pwd: String

  """客户等级"""
  level: CustomerLevelEnum

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """出生年月"""
  birthday: String
}

"""AdministList 负责包装一组Administ数据，你可以在查询中使用分页、排序、过滤等功能"""
type AdministList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Administ]
}

"""车辆来源"""
type CarSource {
  """类型,当前类型分为自营/合作，对应回传信息为own/coporate,是否禁用"""
  type(orderBy: OrderByDirection): CarSourceTypeEnum

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String
  id(orderBy: OrderByDirection): String

  """联系方式"""
  tel(orderBy: OrderByDirection): String

  """名称"""
  name(orderBy: OrderByDirection): String

  """地址"""
  address(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""车辆来源"""
input CarSource_ {
  """类型,当前类型分为自营/合作，对应回传信息为own/coporate,是否禁用"""
  type: CarSourceTypeEnum
  number: String
  id: String

  """联系方式"""
  tel: String

  """名称"""
  name: String

  """地址"""
  address: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean
}

"""CarSourceList 负责包装一组CarSource数据，你可以在查询中使用分页、排序、过滤等功能"""
type CarSourceList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [CarSource]
}

"""类型,当前类型分为自营/合作，对应回传信息为own/coporate"""
enum CarSourceTypeEnum {
  """自己经营的"""
  OWN

  """与人合作的"""
  COPORATE
}

"""客户信息"""
type Customer {
  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long

  """联系方式"""
  tel(orderBy: OrderByDirection): String

  """客户微信昵称"""
  weixinnick(orderBy: OrderByDirection): String

  """客户级别：分为ABC三等"""
  level(orderBy: OrderByDirection): CarSourceTypeEnum

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long

  """身份证号"""
  idcard(orderBy: OrderByDirection): String

  """身份证图片，可多张上传图片，请以分号隔开图片短url"""
  idcardpicurls(orderBy: OrderByDirection): String

  """客户姓名"""
  name(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String
  id(orderBy: OrderByDirection): String

  """身份证地址"""
  address(orderBy: OrderByDirection): String

  """现住地址"""
  addressNow(orderBy: OrderByDirection): String

  """微信号"""
  weixinid(orderBy: OrderByDirection): String
}

"""客户信息"""
input Customer_ {
  """联系方式"""
  tel: String

  """客户微信昵称"""
  weixinnick: String

  """客户级别：分为ABC三等"""
  level: CarSourceTypeEnum

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """身份证号"""
  idcard: String

  """身份证图片，可多张上传图片，请以分号隔开图片短url"""
  idcardpicurls: String

  """客户姓名"""
  name: String
  number: String
  id: String

  """身份证地址"""
  address: String

  """现住地址"""
  addressNow: String

  """微信号"""
  weixinid: String
}

"""客户登记，被分为A/B/C"""
enum CustomerLevelEnum {
  """最高级别"""
  A

  """中等级别"""
  B

  """最低级别"""
  C
}

"""CustomerList 负责包装一组Customer数据，你可以在查询中使用分页、排序、过滤等功能"""
type CustomerList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Customer]
}

"""测试是否为空"""
enum FieldNullEnum {
  """为null"""
  ISNULL

  """不为null"""
  NOTNULL
}

"""Long type"""
scalar Long

"""将所有的SpringMVC.Controller中的Requestmapping方法暴露出来了"""
type Mutation_SpringMVC {
  """禁用门店"""
  mlshop_disableshop(shop: Shop_!): Shop

  """禁用业务员"""
  mlshop_disablesalesman(salesman: Salesman_!): Salesman

  """修改业务员"""
  mlshop_updatesalesman(salesman: Salesman_!): Salesman

  """删除车辆来源"""
  mlshop_removecarsource(carsource: CarSource_!): CarSource

  """启用业务员"""
  mlshop_enablsalesman(salesman: Salesman_!): Salesman
  ABC_abc(role: Role_!, id: String, count: Int!): User

  """增加业务员"""
  mlshop_addsalesman(salesman: Salesman_!): Salesman

  """删除门店"""
  mlshop_removeshop(shop: Shop_!): Shop
  ABC_updateuser(userid: String!): UserList
  ABC_createAcceptance(client: User_!): User

  """增加管理员"""
  mlshop_addadminist(administ: Administ_!): Administ

  """启用门店"""
  mlshop_enablshop(shop: Shop_!): Shop

  """删除管理员"""
  mlshop_removeadminist(administ: Administ_!): Administ

  """禁用用户信息"""
  mlshop_disablecustomer(customer: Customer_!): Customer

  """删除业务员"""
  mlshop_removesalesman(salesman: Salesman_!): Salesman

  """修改用户信息"""
  mlshop_updatecustomer(customer: Customer_!): Customer

  """修改车辆来源"""
  mlshop_updatecarsource(carsource: CarSource_!): CarSource

  """增加门店"""
  mlshop_addshop(shop: Shop_!): Shop

  """增加用户信息"""
  mlshop_addcustomer(customer: Customer_!): Customer

  """启用用户信息"""
  mlshop_enablcustomer(customer: Customer_!): Customer

  """启用车辆来源"""
  mlshop_enablcarsource(carsource: CarSource_!): CarSource

  """修改门店"""
  mlshop_updateshop(shop: Shop_!): Shop

  """禁用车辆来源"""
  mlshop_disablecarsource(carsource: CarSource_!): CarSource

  """禁用管理员"""
  mlshop_disableadminist(administ: Administ_!): Administ

  """删除用户信息"""
  mlshop_removecustomer(customer: Customer_!): Customer

  """启用管理员"""
  mlshop_enabladminist(administ: Administ_!): Administ

  """增加车辆来源"""
  mlshop_addcarsource(carsource: CarSource_!): CarSource

  """修改管理员"""
  mlshop_updateadminist(administ: Administ_!): Administ
}

enum OrderByDirection {
  """升序排列"""
  ASC

  """降序排列"""
  DESC
}

"""分页器"""
input paginator {
  """当前页号（从1开始）"""
  page: Int

  """每页大小"""
  size: Int
}

"""UserRoleItem who uses the application"""
type Privi {
  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String
  id(orderBy: OrderByDirection): String
  name(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""UserRoleItem who uses the application"""
input Privi_ {
  number: String
  id: String
  name: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean
}

"""PriviList 负责包装一组Privi数据，你可以在查询中使用分页、排序、过滤等功能"""
type PriviList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Privi]
}

"""过滤条件"""
input qfilter {
  """下一个条件"""
  next: qfilter

  """键，可以带导航的.号"""
  key: String

  """操作符"""
  operator: QueryFilterOperator

  """条件组合符号"""
  combinator: QueryFilterCombinator

  """值，可以是和like相对应的%abc%"""
  value: String
}

"""查询表达式组合操作符"""
enum QueryFilterCombinator {
  """并且的意思"""
  AND

  """或者的意思"""
  OR

  """取反"""
  NOT
}

"""查询过滤操作符"""
enum QueryFilterOperator {
  """is null"""
  ISNULL

  """is not null"""
  ISNOTNULL

  """>"""
  GREATTHAN

  """<"""
  LESSTHAN

  """>="""
  NOTLESSTHAN

  """<="""
  NOTGREATTHAN

  """="""
  EQUEAL

  """in"""
  IN

  """not in"""
  NOTIN

  """not"""
  NOT

  """like"""
  LIKE
}

"""DDD领域模型下的JPA查询,所有类型均有createtime（创建时间属性),updatedtime(修改时间属性)"""
type QueryType_JPA {
  """User who uses the application"""
  User(number: String, id: String): User

  """RolePrevilegeItem who uses the application"""
  RolePrevilegeItem(id: String): RolePrevilegeItem

  """销售员"""
  Salesman(number: String, id: String): Salesman

  """UserRoleItem who uses the application"""
  Privi(number: String, id: String): Privi

  """门店"""
  Shop(number: String, id: String): Shop

  """管理员"""
  Administ(number: String, id: String): Administ

  """UserRoleItem who uses the application"""
  Role(number: String, id: String): Role

  """UserRoleItem who uses the application"""
  UserRoleItem(id: String): UserRoleItem

  """车辆来源"""
  CarSource(number: String, id: String): CarSource

  """客户信息"""
  Customer(number: String, id: String): Customer

  """UserList 负责包装一组User数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 """
  UserList(paginator: paginator, qfilter: qfilter): UserList

  """
  RolePrevilegeItemList 负责包装一组RolePrevilegeItem数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  RolePrevilegeItemList(paginator: paginator, qfilter: qfilter): RolePrevilegeItemList

  """
  SalesmanList 负责包装一组Salesman数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  SalesmanList(paginator: paginator, qfilter: qfilter): SalesmanList

  """PriviList 负责包装一组Privi数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 """
  PriviList(paginator: paginator, qfilter: qfilter): PriviList

  """ShopList 负责包装一组Shop数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 """
  ShopList(paginator: paginator, qfilter: qfilter): ShopList

  """
  AdministList 负责包装一组Administ数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  AdministList(paginator: paginator, qfilter: qfilter): AdministList

  """RoleList 负责包装一组Role数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 """
  RoleList(paginator: paginator, qfilter: qfilter): RoleList

  """
  UserRoleItemList 负责包装一组UserRoleItem数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  UserRoleItemList(paginator: paginator, qfilter: qfilter): UserRoleItemList

  """
  CarSourceList 负责包装一组CarSource数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  CarSourceList(paginator: paginator, qfilter: qfilter): CarSourceList

  """
  CustomerList 负责包装一组Customer数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  CustomerList(paginator: paginator, qfilter: qfilter): CustomerList
}

"""UserRoleItem who uses the application"""
type Role {
  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String
  name(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String
  id(orderBy: OrderByDirection): String
  previlegeItems(orderBy: OrderByDirection): [RolePrevilegeItem]

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""UserRoleItem who uses the application"""
input Role_ {
  number: String
  name: String
  id: String
  previlegeItems: [RolePrevilegeItem_]

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean
}

"""RoleList 负责包装一组Role数据，你可以在查询中使用分页、排序、过滤等功能"""
type RoleList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Role]
}

"""RolePrevilegeItem who uses the application"""
type RolePrevilegeItem {
  privi(orderBy: OrderByDirection): Privi
  id(orderBy: OrderByDirection): String
}

"""RolePrevilegeItem who uses the application"""
input RolePrevilegeItem_ {
  privi: Privi_
  id: String
}

"""RolePrevilegeItemList 负责包装一组RolePrevilegeItem数据，你可以在查询中使用分页、排序、过滤等功能"""
type RolePrevilegeItemList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [RolePrevilegeItem]
}

"""销售员"""
type Salesman {
  """所属门店"""
  shop(orderBy: OrderByDirection): Shop

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """姓名"""
  name(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String
  id(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long

  """联系方式"""
  tel(orderBy: OrderByDirection): String
}

"""销售员"""
input Salesman_ {
  """所属门店"""
  shop: Shop_

  """姓名"""
  name: String
  number: String
  id: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """联系方式"""
  tel: String
}

"""SalesmanList 负责包装一组Salesman数据，你可以在查询中使用分页、排序、过滤等功能"""
type SalesmanList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Salesman]
}

"""门店"""
type Shop {
  """类型，分为加盟店和自营店来个闹钟"""
  shopTypeEnum(orderBy: OrderByDirection): ShopTypeEnum

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """联系方式"""
  tel(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String
  id(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """名称"""
  name(orderBy: OrderByDirection): String

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long

  """地址"""
  address(orderBy: OrderByDirection): String
}

"""门店"""
input Shop_ {
  """类型，分为加盟店和自营店来个闹钟"""
  shopTypeEnum: ShopTypeEnum
  number: String

  """联系方式"""
  tel: String
  id: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """名称"""
  name: String

  """地址"""
  address: String
}

"""ShopList 负责包装一组Shop数据，你可以在查询中使用分页、排序、过滤等功能"""
type ShopList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Shop]
}

"""类型，分为加盟店和自营店两种"""
enum ShopTypeEnum {
  """加盟"""
  OWN

  """与人合作的"""
  COPORATE
}

"""User who uses the application"""
type User {
  lastName(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String
  id(orderBy: OrderByDirection): String
  firstName(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean
  roleItems(orderBy: OrderByDirection): [UserRoleItem]

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
  filedNullEnum(orderBy: OrderByDirection): FieldNullEnum
}

"""User who uses the application"""
input User_ {
  lastName: String
  number: String
  id: String
  firstName: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean
  roleItems: [UserRoleItem_]
  filedNullEnum: FieldNullEnum
}

"""UserList 负责包装一组User数据，你可以在查询中使用分页、排序、过滤等功能"""
type UserList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [User]
}

"""UserRoleItem who uses the application"""
type UserRoleItem {
  id(orderBy: OrderByDirection): String
  role(orderBy: OrderByDirection): Role
}

"""UserRoleItem who uses the application"""
input UserRoleItem_ {
  id: String
  role: Role_
}

"""UserRoleItemList 负责包装一组UserRoleItem数据，你可以在查询中使用分页、排序、过滤等功能"""
type UserRoleItemList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [UserRoleItem]
}`;
export default  typeDefs;
