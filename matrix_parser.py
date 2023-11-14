def parse_matrix(matrix_input: str, row_separator: str = ';', column_separator: str = ',') -> int:
    areas_amount = 0
    for row in matrix_input.split(row_separator):
        rows = row.split(column_separator)
        for index, column in enumerate(rows):
            if column != '1':
                continue
            if index == 0 and rows[1] == '0':
                areas_amount += 1
                continue
            if index == (len(rows) - 1) and rows[index - 1] == '0':
                areas_amount += 1
                continue
            if rows[index - 1] == '0' and rows[index + 1] == '0':
                areas_amount += 1
    return areas_amount
