// 通用列表page对象定义
interface IPageRes<T> {
    // 页码
    pageNo: number;
    // 页数
    pageSize: number;
    // 总分页
    totalCount: number;
    // 列表结果
    list: T[];
}

// 通用接口res对象-列表类型
interface IPageDataRes<T> {
    // 接口提示信息
    message: string;
    // 列表类型包装page
    data: IPageRes<T>;
    // 接口调用是否成功
    success: boolean;
}

// 通用接口res对象-列表类型
interface IDataRes<T> {
    // 接口提示信息
    message: string;
    // 普通接口类型，直接返回result
    data: T;
    // 接口调用是否成功
    success: boolean;
}

export type {IPageRes, IPageDataRes, IDataRes};
